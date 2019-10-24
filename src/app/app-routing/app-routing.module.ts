import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthComponent } from '../pages/login-page/user-auth/user-auth.component';
import { StartPageComponent } from '../pages/start-page/start-page.component';
import { AuthGuard } from '../guards/auth.guard';
import { RouterEnum } from './router-enum/router.enum';

const routes: Routes = [
    { path: '', redirectTo: RouterEnum.LOGIN_PAGE, pathMatch: 'full' },
    { path: RouterEnum.LOGIN_PAGE, component: UserAuthComponent, pathMatch: 'full' },
    { path: RouterEnum.START_PAGE, component: StartPageComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
