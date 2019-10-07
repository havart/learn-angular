import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, interval, of, concat, Subject } from 'rxjs';
import { take, map, delay } from 'rxjs/operators';

@Injectable()
export class PhoneWidgetService {
    seconds = 30;
    private _fullName$ = new Subject<string>();
    private _isCall$ = new BehaviorSubject<boolean>(false);

    get isCall$(): Observable<boolean> {
        return this._isCall$.asObservable();
    }
    get fullname$(): Observable<string> {
        return this._fullName$.asObservable();
    }

    startCall(firstName: string, lastName: string): void {
        this._isCall$.next(true);
        this._fullName$.next(`${firstName} ${lastName}`);
    }

    call$(): Observable<number | string> {
        return concat(
            of('start'),
            of('end').pipe(delay(2000)),
            interval(1000).pipe(
                take(this.seconds),
                map((seconds: number) => -(seconds - this.seconds)),
            ),
        );
    }

    endCall(): void {
        this._isCall$.next(false);
    }
}
