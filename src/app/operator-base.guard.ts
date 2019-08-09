import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from './services/authorization.service';
import { LOGIN } from './constants/path.constans';

@Injectable({
    providedIn: 'root',
})
export class OperatorBaseGuard implements CanActivate {
    constructor(private authorizationService: AuthorizationService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        const res = this.authorizationService.checkAuth();
        if (!res) {
            this.router.navigate([LOGIN]);
        }
        return res;
    }
}
