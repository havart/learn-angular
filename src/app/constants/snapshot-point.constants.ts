import { ListOfStepsInterface } from '../interfaces/list-of-steps.interface';

export const STEP_LIST: ReadonlyArray<ListOfStepsInterface> = [
    {
        description: 'Соедините кассу и терминал с помощью кабеля MicroUSB -> MicroUSB-A',
        minTime: 0,
        maxTime: 220,
    },
    { description: 'На экране кассы нажмите...', minTime: 220, maxTime: 336 },
    { description: 'На экране кассы нажмите...', minTime: 336, maxTime: 436 },
];
