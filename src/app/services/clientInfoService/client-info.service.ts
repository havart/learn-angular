import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient } from '../../interfaces/client.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { API } from '../API';
import { IClientDto } from './dto/client.interface';
import { map } from 'rxjs/operators';
import { getAge } from '../../helpers/user-age';
import { ILabor } from '../../interfaces/labor.interface';

@Injectable({
    providedIn: 'root',
})
export class ClientInfoService {

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

    getLaborById$(clientId: number) {
        return this.httpClient.get<ILabor>(this.config.LABOR_URL + '/' + clientId);
    }

    addLabor(form) {
        return this.httpClient.post(this.config.LABOR_URL, form);
    }

    updateLabor(form, id) {
        this.httpClient.put<ILabor>(this.config.LABOR_URL + '/' + id, form);
    }
}
