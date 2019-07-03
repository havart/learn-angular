import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './authorization-page/authorization.component';
import { OperatorBaseComponent } from './main-page/operator-base/operator-base.component';
import { OperatorBaseGuard } from './operator-base.guard';

const routes: Routes = [
    {
        path: 'operator',
        component: OperatorBaseComponent,
        canActivate: [OperatorBaseGuard],
    },
    { path: 'login', component: AuthorizationComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
