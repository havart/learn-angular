import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { RoutingPathEnum } from '../app-routing-enum';

@Injectable()
export class UserAuthGuard implements CanActivate {
    constructor(public userAuthService: UserAuthService, public router: Router) {}

    public canActivate(): boolean {
        if (!this.userAuthService.isUserAuthenticated()) {
            this.router.navigate([RoutingPathEnum.LOGIN]);
            return false;
        }
        return true;
    }
}
