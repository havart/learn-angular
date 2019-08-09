import { Injectable } from '@angular/core';
import { AuthData } from '../interfaces/authData.interface';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    private authData: AuthData;

    constructor() {}

    setUser(login: string): void {
        if (!this.authData) {
            this.authData = {
                username: '',
            };
        }
        this.authData.username = login;
        const JsonUser: string = JSON.stringify(this.authData);
        localStorage.setItem('authData', JsonUser);
    }

    getUser() {
        const JsonUser: string = localStorage.getItem('authData');
        this.authData = JSON.parse(JsonUser);
        return this.authData;
    }

    clearLocalStorage() {
        localStorage.clear();
    }
}
