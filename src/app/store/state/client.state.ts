import { IClient } from '../../interfaces/client.interface';

export interface IClientState {
    clients: IClient[];
    selectedClient: IClient;
}

export const initialClientLaborState: IClientState = {
    clients: null,
    selectedClient: null,
};
