import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HeaderService {
    shrinkHeader$ = new BehaviorSubject<boolean>(false);

    constructor() {}

    setShrinkHeader(value: boolean): void {
        this.shrinkHeader$.next(value);
    }

    getShrinkHeader(): Observable<boolean> {
        return this.shrinkHeader$.asObservable();
    }
}
