import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private mainUrl = 'https://5bfff0a00296210013dc7e82.mockapi.io/test';

    public get CLIENT_URL(): string {
        return `${this.mainUrl}/user-info/`;
    }

    public get STEPS_URL(): string {
        return `${this.mainUrl}/steps`;
    }

    public get COMMENTS_URL(): string {
        return `${this.mainUrl}/steps`;
    }

    public get CONTACTS_URL(): string {
        return `${this.mainUrl}/contacts`;
    }

    public get CLIENT_ACTIVITY_URL(): string {
        return `${this.mainUrl}/labor-activity/`;
    }
}
