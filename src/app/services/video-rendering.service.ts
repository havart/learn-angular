import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class VideoRenderingService {
    currentTime$ = new Subject<number>();
    currentTime: number;

    constructor() {}
}
