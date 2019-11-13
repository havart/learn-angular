import { BehaviorSubject, Observable } from 'rxjs';

export class AbstractLoading {
    private readonly _isDataLoading$ = new BehaviorSubject<boolean>(false);

    public get isLoading(): boolean {
        return this._isDataLoading$.getValue();
    }

    public getLoadingStatus$(): Observable<boolean> {
        return this._isDataLoading$.asObservable();
    }

    public setLoadingStatus(value: boolean): void {
        this._isDataLoading$.next(value);
    }
}
