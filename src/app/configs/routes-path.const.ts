import { MainPageRoutingEnum } from '../pages/main-page/main-page-routing.enum';
import { RouteLink } from '../interfaces/routes-link.interface';

export const routesLinks: ReadonlyArray<RouteLink> = [
    {
        label: 'Трудовая деятельность',
        path: MainPageRoutingEnum.ACTIVITY,
        index: '0',
    },
    {
        label: 'Связи',
        path: MainPageRoutingEnum.CONTACTS,
        index: '1',
    },
];
