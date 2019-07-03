import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from './services/authorization.service';

@Injectable({
    providedIn: 'root',
})
export class OperatorBaseGuard implements CanActivate {
    constructor(private authorizationService: AuthorizationService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.authorizationService.checkAuth();
    }
}
