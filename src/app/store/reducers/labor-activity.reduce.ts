import { initialLaborActivityState, LaborActivityState } from '../state/labor-activity.state';
import { LaborActivityActions, LaborActivityActionsEnum } from '../actions/labor-activity.action';

export function laborActivityReducers(
    state: LaborActivityState = initialLaborActivityState,
    action: LaborActivityActions,
): LaborActivityState {
    switch (action.type) {
        case LaborActivityActionsEnum.GetLaborActivitySuccess: {
            return {
                ...state,
                laborActivity: action.payload,
            };
        }
        default:
            return state;
    }
}
