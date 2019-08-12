import { Injectable } from '@angular/core';
import { AuthData } from '../interfaces/authData.interface';
import { AUTHDATA } from '../constants/auth.constans';

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
        localStorage.setItem(AUTHDATA, JsonUser);
    }

    getUser() {
        const JsonUser: string = localStorage.getItem(AUTHDATA);
        this.authData = JSON.parse(JsonUser);
        return this.authData;
    }

    deleteLocalStorageUser() {
        localStorage.removeItem(AUTHDATA);
    }
}
