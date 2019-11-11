import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildRoutingEnum } from '../../app-routing-enum';
import { ClientAddressComponent } from '../../components/client-address/client-address.component';
import { ClientIdentificationComponent } from '../../components/client-identification/client-identification.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ClientActivityComponent } from '../../components/client-activity/client-activity.component';
import { ClientContactsComponent } from 'src/app/components/client-contacts/client-contacts.component';
import { ClientOrderHistoryComponent } from 'src/app/components/client-order-history/order-history.component';

const routes: Routes = [
    {
        path: ':id',
        component: MainLayoutComponent,
        children: [
            { path: ChildRoutingEnum.ADDRESS, component: ClientAddressComponent },
            { path: ChildRoutingEnum.IDENTIFICATION, component: ClientIdentificationComponent },
            { path: ChildRoutingEnum.ACTIVITY, component: ClientActivityComponent },
            { path: ChildRoutingEnum.CONTACTS, component: ClientContactsComponent },
            { path: ChildRoutingEnum.ORDER_HISTORY, component: ClientOrderHistoryComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainPageRoutingModule {}
