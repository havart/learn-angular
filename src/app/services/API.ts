import { Injectable } from '@angular/core';

@Injectable()
export class API {
    private main = 'http://5bfff0a00296210013dc7e82.mockapi.io/test';
    public get COMMENT_STEP_URL(): string {
        return `${this.main}/steps`;
    }

    public get CLIENT_URL(): string {
        return `${this.main}/user-info/`;
    }

    public get LABOR_URL(): string {
        return `${this.main}/labor-activity`;
    }
}
