import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient } from '../../interfaces/client.interface';
import { Observable } from 'rxjs';
import { API } from '../API';
import { IClientDto } from './dto/client.interface';
import { map } from 'rxjs/operators';
import { getAge } from '../../helpers/user-age';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';

@Injectable({
    providedIn: 'root',
})
export class ClientInfoService {
    constructor(private httpClient: HttpClient, private config: API, private store$: Store<IAppState>) {}

    getClientById$(id: string): Observable<IClient> {
        return this.httpClient.get<IClientDto>(this.config.CLIENT_URL + id).pipe(
            map((client: IClientDto) => {
                return {
                    ...client,
                    age: getAge(client.age),
                };
            }),
        );
    }
}
