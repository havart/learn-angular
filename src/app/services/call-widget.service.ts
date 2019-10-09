import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CallWidgetService {
    userName$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    phoneNumber$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    callStatus$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    setUserName(userName): void {
        this.userName$.next(userName);
    }

    setPhoneNumber(phoneNumber): void {
        this.phoneNumber$.next(phoneNumber);
    }

    setCallStatus(callStatus): void {
        this.callStatus$.next(callStatus);
    }

    getUserName(): string {
        return this.userName$.getValue();
    }

    getCallStatusValue(): boolean {
      return this.callStatus$.getValue();
    }
}
