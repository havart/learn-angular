import { ClientInterface } from 'src/app/interfaces/client.interface';

export interface ClientState {
    client: ClientInterface;
}

export const initialClientState: ClientState = {
    client: null,
};
