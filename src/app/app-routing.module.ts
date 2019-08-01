import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './components/smart/authorization/authorization.component';
import { OperatorBaseComponent } from './pages/main-page/operator-base/operator-base.component';
import { OperatorBaseGuard } from './operator-base.guard';
import { TaskComponent } from './components/dumb/task/task.component';

const routes: Routes = [
    {
        path: 'operator',
        component: OperatorBaseComponent,
        canActivate: [OperatorBaseGuard],
        children: [
            {
                path: 'contact',
                children: [
                    {
                        path: '',
                        loadChildren: './components/feature/contact-tab/features/contact-tab.module#ContactTabModule',
                    },
                ],
            },
        ],
    },
    {
        path: 'task',
        component: TaskComponent,
        canActivate: [OperatorBaseGuard],
    },
    { path: '', component: AuthorizationComponent },
    { path: 'login', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
