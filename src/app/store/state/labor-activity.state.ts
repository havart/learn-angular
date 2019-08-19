import { ClientLaborActivityInterface } from 'src/app/interfaces/clientLaborActivity.interface';

export interface LaborActivityState {
    laborActivity: ClientLaborActivityInterface;
}

export const initialLaborActivityState: LaborActivityState = {
    laborActivity: null,
};
