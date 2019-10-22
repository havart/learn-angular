import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlGetTaskConst } from '../configs/url-get-task.const';

@Injectable({
    providedIn: 'root',
})
export class GetTaskService {
    constructor(private http: HttpClient) {}

    getClient$(id: number) {
        return this.http.get(urlGetTaskConst + id);
    }
}
