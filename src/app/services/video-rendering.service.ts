import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class VideoRenderingService {
    currentTime$ = new Subject<number>();

    getPercentFromValue(value: number, minTime: number, maxTime: number): number {
        return Math.floor((100 / (maxTime - minTime)) * (value - minTime));
    }
}
