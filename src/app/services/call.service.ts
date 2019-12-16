import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { callState } from '../constants/call-status.constant';
import { ClientWidgetInterface } from '../interfaces/client-widget.interface';
import { CallStatusInterface } from '../interfaces/call-status.interface';

@Injectable({
    providedIn: 'root',
})
export class CallService {
    private readonly currentCallState = callState;
    private readonly _callStatus$ = new BehaviorSubject<CallStatusInterface>(this.currentCallState);
    private readonly _client$ = new BehaviorSubject<ClientWidgetInterface>(null);

    public setCallStatus(value, status): void {
        this.currentCallState[status] = value;
        this._callStatus$.next(this.currentCallState);
    }

    public getCallStatus$(): Observable<CallStatusInterface> {
        return this._callStatus$.asObservable();
    }

    public setClient(value): void {
        this._client$.next(value);
    }

    public client$(): Observable<ClientWidgetInterface> {
        return this._client$.asObservable();
    }
}
