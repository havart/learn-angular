import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlGetConst } from '../configs/url-get.const';
import { Observable } from 'rxjs';
import { ClientInterface } from '../interfaces/client.interface';

@Injectable({
    providedIn: 'root',
})
export class GetTaskService {
    constructor(private http: HttpClient) {}

    getClient$(id: number): Observable<ClientInterface> {
        return this.http.get<ClientInterface>(urlGetConst + id);
    }
}
