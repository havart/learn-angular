import { ClientInterface } from '../interfaces/client.interface';

export interface ClientState {
    client: ClientInterface;
    error: {};
}

export const initialClientState: ClientState = {
    client: null,
    error: null,
};
