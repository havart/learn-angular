import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLabor from './client-labor.reducer';
import { Dictionary } from '@ngrx/entity';
import { ILabor } from 'src/app/interfaces/labor.interface';

export const LABOR = 'labor';
export const getLaborState = createFeatureSelector<fromLabor.ILaborState>(LABOR);

export const selectLaborEntities = createSelector(
    getLaborState,
    fromLabor.selectEntities,
);

export const selectLoadingStatus = createSelector(
    getLaborState,
    ({ isLoading }: fromLabor.ILaborState) => isLoading,
);

export const selectedLaborId = createSelector(
    getLaborState,
    ({ selectedId }: fromLabor.ILaborState) => selectedId,
);

export const selectGetLabor = createSelector(
    selectedLaborId,
    selectLaborEntities,
    (laborId: string, entities: Dictionary<ILabor>) => entities[laborId],
);
