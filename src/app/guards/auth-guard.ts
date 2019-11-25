import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UNAUTHORIZED } from '../constants/server-response.constants';
import { ErrorSnackBarService } from '../services/error-snack-bar.service';
import { UserAuthService } from '../services/user-auth.service';
import { RoutingPathEnum } from '../app-routing-enum';

@Injectable()
export class UserAuthGuard implements CanActivate {
    constructor(
        private readonly userAuthService: UserAuthService,
        private readonly router: Router,
        private readonly errorSnackBarService: ErrorSnackBarService,
    ) {}

    public canActivate(): boolean {
        if (!this.userAuthService.isUserAuthenticated()) {
            this.errorSnackBarService.openSnackBarError(UNAUTHORIZED);
            this.router.navigate([RoutingPathEnum.LOGIN]);

            return false;
        }

        return true;
    }
}
