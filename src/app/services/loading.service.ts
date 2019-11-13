import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    public readonly _isDataLoading$ = new BehaviorSubject<boolean>(false);

    public getLoadingStatus$(): Observable<boolean> {
        return this._isDataLoading$.asObservable();
    }

    public setLoadingStatus(value: boolean): void {
        this._isDataLoading$.next(value);
    }
}
