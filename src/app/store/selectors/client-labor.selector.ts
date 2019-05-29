import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLabor from '../reducers/client-labor.reducer';
import { Dictionary } from '@ngrx/entity';
import { ILabor } from 'src/app/interfaces/labor.interface';

export const LABOR = 'labor';
export const getLaborState = createFeatureSelector<fromLabor.ILaborState>(LABOR);

export const getLaborEntities = createSelector(
    getLaborState,
    fromLabor.selectEntities,
);

export const getLoadingStatus = createSelector(
    getLaborState,
    ({ isLoading }: fromLabor.ILaborState) => isLoading,
);

export const getSelectedLaborId = createSelector(
    getLaborState,
    ({ selectedId }: fromLabor.ILaborState) => selectedId,
);

export const getLabor = createSelector(
    getSelectedLaborId,
    getLaborEntities,
    (laborId: string, entities: Dictionary<ILabor>) => entities[laborId],
);
