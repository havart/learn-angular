import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildRoutingEnum } from './main-page-routing.enum';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ClientActivityComponent } from '../../components/client-activity/client-activity.component';
import { ClientContactsComponent } from 'src/app/components/client-contacts/client-contacts.component';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: ChildRoutingEnum.ACTIVITY, component: ClientActivityComponent },
            { path: ChildRoutingEnum.CONTACTS, component: ClientContactsComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainPageRoutingModule {}
