import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { callState} from '../constants/server-response.constants'

@Injectable({
    providedIn: 'root',
})
export class CallService {
    private readonly _callStatus$ = new BehaviorSubject(false);
    private readonly _client$ = new BehaviorSubject(null);

    constructor() {}

    public setCallStatus(value): void {
        this._callStatus$.next(value);
    }

    public getCallStatus$(): Observable<any> {
        return this._callStatus$.asObservable();
    }

    public setClient(value): void {
        this._client$.next(value);
    }

    public client$(): Observable<any> {
        return this._client$.asObservable();
    }
}
