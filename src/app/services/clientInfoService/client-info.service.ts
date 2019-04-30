import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientInterface } from '../../interfaces/client.interface';
import { Observable } from 'rxjs';
import { API } from '../API';

@Injectable({
    providedIn: 'root',
})
export class ClientInfoService {
    constructor(private httpClient: HttpClient, private config: API) {}

    getById(id: string): Observable<ClientInterface> {
        return this.httpClient.get(this.config.CLIENT_URL + id);
    }
}
