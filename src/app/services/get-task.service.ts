import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlGetTask } from '../configs/url-get-task';

@Injectable({
    providedIn: 'root',
})
export class GetTaskService {
    constructor(private http: HttpClient) {}

    getClient(id: number) {
        return this.http.get(urlGetTask + id);
    }
}
