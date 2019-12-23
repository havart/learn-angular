import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { callStatus } from '../constants/call-status.constants';
import { CallStatusEnum } from '../enums/call-status.enum';
import { getRandomIdHelper } from '../helpers/get-random-id.helper';
import { CallStatusInterface } from '../interfaces/call-status.interface';
import { ClientWidgetInterface } from '../interfaces/client-widget.interface';

@Injectable({
    providedIn: 'root',
})
export class CallService {
    public callStatus$ = new BehaviorSubject<CallStatusInterface>(callStatus);
    public nameAndPhone$ = new BehaviorSubject<ClientWidgetInterface>(null);
    private readonly callStatusEnum: typeof CallStatusEnum = CallStatusEnum;

    public setCallStatus(value, status): void {
        this.callStatus$.next({ ...this.callStatus$.getValue(), [status]: value });
    }

    public setData(value: ClientWidgetInterface): void {
        this.nameAndPhone$.next(value);
    }

    public data$(): Observable<ClientWidgetInterface> {
        return this.nameAndPhone$.asObservable();
    }

    public getCallStatus$(): Observable<CallStatusInterface> {
        return this.callStatus$.asObservable();
    }

    public makeCall(client: ClientWidgetInterface): void {
        this.setCallStatus(true, this.callStatusEnum.CONNECTING);
        this.setCallStatus(true, this.callStatusEnum.CALL);
        this.setData(client);
    }

    public makeConnection(): void {
        const randomNumber = getRandomIdHelper(1, 20);

        this.setCallStatus(false, this.callStatusEnum.CONNECTING);

        randomNumber < 10
            ? this.setCallStatus(true, this.callStatusEnum.CONNECTED)
            : this.setCallStatus(true, this.callStatusEnum.ERROR_CONNECT);
    }

    public endCall(): void {
        this.callStatus$.next(callStatus);
        this.setData(null);
    }
}
