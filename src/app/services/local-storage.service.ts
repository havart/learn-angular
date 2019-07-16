import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    private authData = {
        username: '',
    };

    constructor() {}

    setUser(login: string): void {
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
