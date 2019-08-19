import { Injectable } from '@angular/core';
import { AuthDataInterface } from '../interfaces/authData.interface';
import { AUTHDATA } from '../constants/auth.constans';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    private authData: AuthDataInterface;

    constructor() {}

    setUser(login: string): void {
        if (!this.authData) {
            this.authData = {
                username: '',
            };
        }

        this.authData.username = login;
        const jsonUser: string = JSON.stringify(this.authData);
        localStorage.setItem(AUTHDATA, jsonUser);
    }

    getUser(): AuthDataInterface {
        const jsonUser: string = localStorage.getItem('authData');

        this.authData = JSON.parse(jsonUser);

        return this.authData;
    }

    deleteLocalStorageUser(): void {
        localStorage.removeItem(AUTHDATA);
    }
}
