import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient } from '../../interfaces/client.interface';
import { Observable } from 'rxjs';
import { API } from '../API';
import { IClientDto } from './dto/client.interface';
import { map } from 'rxjs/operators';
import { getAge } from '../../helpers/user-age';
import { ILabor } from '../../interfaces/labor.interface';

@Injectable({
    providedIn: 'root',
})
export class ClientInfoService {
    // labor$: Observable<ILabor>;
    // clientId = '' + Math.floor(Math.random() * 5 + 1);
    clientId = '5';
    constructor(private httpClient: HttpClient, private config: API) {}

    getById$(id: string): Observable<IClient> {
        return this.httpClient.get<IClientDto>(this.config.CLIENT_URL + id).pipe(
            map(el => {
                return {
                    ...el,
                    age: getAge(el.age),
                };
            }),
        );
    }

    getLaborById$(): Observable<ILabor> {
        return this.httpClient.get<ILabor>(this.config.LABOR_URL + '/' + this.clientId);
        // return this.labor$ ? this.labor$ : this.httpClient.get<ILabor>(this.config.LABOR_URL + '/' + this.clientId);
    }

    addLabor(form) {
        return this.httpClient.post<ILabor>(this.config.LABOR_URL, form);
    }

    saveLabor(form, id) {
        return this.httpClient.put<ILabor>(this.config.LABOR_URL + '/' + id, form);
    }
}
