import { ClientLaborActivityInterface } from 'src/app/interfaces/client-labor-activity.interface';

export interface LaborActivityState {
    laborActivity: ClientLaborActivityInterface;
}

export const initialLaborActivityState: LaborActivityState = {
    laborActivity: null,
};
