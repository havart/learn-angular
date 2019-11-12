import { ChildRoutingEnum } from '../pages/main-page/main-page-routing.enum';
import { RouteLink } from '../interfaces/routes-link.interface';

export const routesLinks: ReadonlyArray<RouteLink> = [
    {
        label: 'Трудовая деятельность',
        path: ChildRoutingEnum.ACTIVITY,
        index: '0',
    },
    {
        label: 'Связи',
        path: ChildRoutingEnum.CONTACTS,
        index: '1',
    },
];
