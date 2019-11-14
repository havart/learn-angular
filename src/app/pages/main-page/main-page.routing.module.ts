import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageRoutingEnum } from './main-page-routing.enum';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ClientActivityComponent } from '../../components/client-activity/client-activity.component';
import { ClientContactsComponent } from '../../components/client-contacts/client-contacts.component';

const routes: Routes = [
    {
        path: `${MainPageRoutingEnum.CLIENT}/:id`,
        component: MainLayoutComponent,
        children: [
            { path: MainPageRoutingEnum.ACTIVITY, component: ClientActivityComponent },
            { path: MainPageRoutingEnum.CONTACTS, component: ClientContactsComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainPageRoutingModule {}
