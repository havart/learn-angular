import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { OperatorBaseComponent } from './pages/main-page/operator-base/operator-base.component';
import { OperatorBaseGuard } from './operator-base.guard';
import { TaskComponent } from './pages/task/task.component';

const routes: Routes = [
    {
        path: 'operator',
        component: OperatorBaseComponent,
        canActivate: [OperatorBaseGuard],
    },
    {
        path: 'task',
        component: TaskComponent,
        canActivate: [OperatorBaseGuard],
    },
    { path: 'login', component: AuthorizationComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
