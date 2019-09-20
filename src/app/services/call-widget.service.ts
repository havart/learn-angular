import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable({
    providedIn: 'root',
})
export class CallWidgetService {
    userName$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    phoneNumber$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    callStatus$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() {}

    setUserName(userName): void {
        this.userName$.next(userName);
    }

    setPhoneNumber(phoneNumber): void {
        this.phoneNumber$.next(phoneNumber);
    }

    setCallStatus(callStatus): void {
        this.callStatus$.next(callStatus);
    }
}
