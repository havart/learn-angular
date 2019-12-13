import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { callState } from '../constants/call-status.constant';

@Injectable({
    providedIn: 'root',
})
export class CallService {
    private readonly currentCallState = callState;
    private readonly _callStatus$ = new BehaviorSubject(this.currentCallState);
    private readonly _client$ = new BehaviorSubject(null);

    constructor() {}

    public setCallStatus(value, status): void {
        this.currentCallState[status] = value;
        this._callStatus$.next(this.currentCallState);
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
