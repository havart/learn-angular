import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { callStatus } from '../constants/call-status.constants';
import { CallStatusInterface } from '../interfaces/call-status.interface';
import { WidgetDataInterface } from '../interfaces/widget-data.interface';

@Injectable({
    providedIn: 'root',
})
export class WidgetCallService {
    public callStatus$ = new BehaviorSubject<CallStatusInterface>(callStatus);
    public nameAndPhone$ = new BehaviorSubject<WidgetDataInterface>(null);

    public setCallStatus(value, status): void {
        this.callStatus$.next({ ...this.callStatus$.getValue(), [status]: value });
    }

    public setData(value): void {
        this.nameAndPhone$.next(value);
    }

    public getCallStatus$(): Observable<CallStatusInterface> {
        return this.callStatus$.asObservable();
    }

    public data$(): Observable<WidgetDataInterface> {
        return this.nameAndPhone$.asObservable();
    }
}
