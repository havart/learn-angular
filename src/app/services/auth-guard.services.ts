import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserAuthService } from './user-auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    private isUserAuth: boolean;
    constructor(public userAuthService: UserAuthService, public router: Router) {}

    public canActivate(): boolean {
        if (!this.userAuthService.isUserAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
