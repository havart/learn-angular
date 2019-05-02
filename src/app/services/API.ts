import { Injectable } from '@angular/core';

@Injectable()
export class API {
    public get COMMENT_URL(): string {
        return 'http://5bfff0a00296210013dc7e82.mockapi.io/test/steps';
    }
}
