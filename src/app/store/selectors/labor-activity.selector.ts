import { createSelector } from '@ngrx/store';
import { LaborActivityState } from '../state/labor-activity.state';
import { MainState } from '../state/main.state';

const selectState = (state: MainState) => state.laborActivity;

export const selectLaborActivity = createSelector(
    selectState,
    (state: LaborActivityState) => state.laborActivity,
);
