import { ChildRoutingEnum } from '../app-routing-enum';

export const routesLinks = [
    {
        label: 'Адресса',
        path: `./${ChildRoutingEnum.ADDRESS}`,
        index: '0',
    },
    {
        label: 'Идентификация',
        path: `./${ChildRoutingEnum.IDENTIFICATION}`,
        index: '1',
    },
    {
        label: 'Трудовая деятельность',
        path: `./${ChildRoutingEnum.ACTIVITY}`,
        index: '2',
    },
    {
        label: 'Связи',
        path: `./${ChildRoutingEnum.CONTACTS}`,
        index: '3',
    },
    {
        label: 'История заявок',
        path: `./${ChildRoutingEnum.ORDER_HISTORY}`,
        index: '4',
    },
];
