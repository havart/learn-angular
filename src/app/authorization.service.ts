import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthorizationService {
    constructor() {}

    setLocalStorage(login): void {
        const authData: object = {
            userName: login,
        };
        const JsonUser: string = JSON.stringify(authData);
        localStorage.setItem('authData', JsonUser);
    }
}
