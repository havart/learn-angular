import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RequestService {
    public readonly _isDataLoading$ = new BehaviorSubject<boolean>(false);
    constructor() {}

    public disableRequest(): void {
        this._isDataLoading$.next(true);
    }

    public enableRequest(): void {
        this._isDataLoading$.next(false);
    }
}
