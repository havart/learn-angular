import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient } from '../../interfaces/client.interface';
import { Observable } from 'rxjs';
import { API } from '../API';
import { IClientDto } from './dto/client.interface';
import { map } from 'rxjs/operators';
import { getAge } from '../../helpers/user-age';
import { ILabor } from 'src/app/interfaces/labor.interface';

@Injectable({
    providedIn: 'root',
})
export class ClientInfoService {
    clientInfo$: Observable<IClient>;

    constructor(private httpClient: HttpClient, private config: API) {}

    getById$(id: string): Observable<IClient> {
        return (this.clientInfo$ = this.httpClient.get<IClientDto>(this.config.CLIENT_URL + id).pipe(
            map(el => {
                return {
                    ...el,
                    age: getAge(el.age),
                };
            }),
        ));
    }

    getLaborById$(id: string): Observable<ILabor> {
        return this.httpClient.get<ILabor>(this.config.LABOR_URL + '/' + id);
    }
}
