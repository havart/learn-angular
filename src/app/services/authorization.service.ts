import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthorizationService {
    constructor(private localStorageService: LocalStorageService) {}

    checkAuth(): boolean {
        const user = this.localStorageService.getUser();
        if (user && user.username) {
            return true;
        }
        return false;
    }
}
