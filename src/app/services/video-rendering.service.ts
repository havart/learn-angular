import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class VideoRenderingService {
    private _currentTime$ = new Subject<number>();

    get currentTime$(): Observable<number> {
        return this._currentTime$.asObservable();
    }

    setCurrentTime$(value: number): void {
        this._currentTime$.next(value);
    }

    getPercentFromValue(value: number, minTime: number, maxTime: number): number {
        return Math.floor((100 / (maxTime - minTime)) * (value - minTime));
    }
}
