import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { callState } from '../constants/call-status.constant';
import { ClientWidgetInterface } from '../interfaces/client-widget.interface';
import { CallStatusInterface } from '../interfaces/call-status.interface';
import { CallStatusEnum } from '../enums/call-status.enum';
import { getRandomIdHelper } from '../helpers/get-random-id.helper';

@Injectable({
    providedIn: 'root',
})
export class CallService {
    private readonly _callStatus$ = new BehaviorSubject<CallStatusInterface>(callState);
    private readonly _client$ = new BehaviorSubject<ClientWidgetInterface>(null);
    private readonly callStatusEnum: typeof CallStatusEnum = CallStatusEnum;

    public setCallStatus(status: string, value: boolean): void {
        this._callStatus$.next({ ...this._callStatus$.getValue(), [status]: value });
    }

    public getCallStatus$(): Observable<CallStatusInterface> {
        return this._callStatus$.asObservable();
    }

    public setClient(value: ClientWidgetInterface): void {
        this._client$.next(value);
    }

    public client$(): Observable<ClientWidgetInterface> {
        return this._client$.asObservable();
    }

    public makeCall(client: ClientWidgetInterface): void {
        this.setCallStatus(this.callStatusEnum.CONNECTING, true);
        this.setCallStatus(this.callStatusEnum.CALL, true);
        this.setClient(client);
    }

    public makeConnection(): void {
        const randomNumber = getRandomIdHelper(1, 20);

        this.setCallStatus(this.callStatusEnum.CONNECTING, false);

        randomNumber < 10
            ? this.setCallStatus(this.callStatusEnum.CONNECTED, true)
            : this.setCallStatus(this.callStatusEnum.ERROR_CONNECT, true);
    }

    public endCall(): void {
        this._callStatus$.next(callState);
        this.setClient(null);
    }
}
