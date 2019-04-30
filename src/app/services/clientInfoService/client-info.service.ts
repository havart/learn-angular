import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientInterface } from '../../interfaces/client.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ClientInfoService {
    constructor(private httpClient: HttpClient) {}

    getById(url: string, id: string): Observable<ClientInterface> {
        return this.httpClient.get(url + id);
    }
}
