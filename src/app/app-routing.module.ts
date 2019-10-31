import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingPathEnum } from './app-routing-enum';
import { UserAuthComponent } from './pages/login-page/components/user-auth/user-auth.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { UserAuthGuard } from './guards/auth-guard';
import { MainLayoutComponent } from './pages/main-page/main-layout/main-layout.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: RoutingPathEnum.LOGIN,
        pathMatch: 'full',
    },
    {
        path: RoutingPathEnum.LOGIN,
        component: UserAuthComponent,
    },
    {
        path: RoutingPathEnum.START,
        component: StartPageComponent,
        canActivate: [UserAuthGuard],
    },
    {
        path: RoutingPathEnum.MAIN,
        component: MainLayoutComponent,
        canActivate: [UserAuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
