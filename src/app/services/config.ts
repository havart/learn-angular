import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    public get CLIENTURL(): string {
        return 'http://5bfff0a00296210013dc7e82.mockapi.io/test/user-info/';
    }
}
