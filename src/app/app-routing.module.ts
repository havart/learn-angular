import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RoutingPathEnum } from './app-routing-enum';
import { UserAuthComponent } from './pages/login-page/components/user-auth/user-auth.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.services';

const routes: Routes = [
    {
        path: '',
        redirectTo: RoutingPathEnum.LOGIN,
        pathMatch: 'full',
    },
    {
        path: RoutingPathEnum.LOGIN,
        component: UserAuthComponent,
        pathMatch: 'full',
    },
    {
        path: RoutingPathEnum.START,
        component: StartPageComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
