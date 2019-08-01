import { initialClientState, ClientState } from '../state/cleint.state';
import { ClientActions, ClientActionsEnum } from '../actions/client.action';

export const clientReducers = (state: ClientState = initialClientState, action: ClientActions): ClientState => {
    switch (action.type) {
        case ClientActionsEnum.GetClientSuccess: {
            return {
                client: action.payload,
            };
        }
        default:
            return state;
    }
};
