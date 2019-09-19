import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable({
    providedIn: 'root',
})
export class CallWidgetService {
    userName$ = new Subject<string>();
    phoneNumber$ = new Subject<string>();
    callStatus$ = new Subject<boolean>();

    constructor() {}

    setUserName(userName): void {
        this.userName$.next(userName);
    }

    getUserName$(): Observable<string> {
        console.log(this.userName$.asObservable() | async );
        return this.userName$.asObservable();
    }

    setPhoneNumber(phoneNumber): void {
        this.phoneNumber$.next(phoneNumber);
    }

    getPhoneNumber$(): Observable<string> {
        return this.phoneNumber$.asObservable();
    }

    setCallStatus(callStatus): void {
        this.callStatus$.next(callStatus);
    }
}
