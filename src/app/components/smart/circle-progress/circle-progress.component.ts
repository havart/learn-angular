import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { VideoRenderingService } from '../../../services/video-rendering.service';
import { filter, map, takeUntil, tap, throttleTime } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'app-circle-progress',
    templateUrl: './circle-progress.component.html',
    styleUrls: ['./circle-progress.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleProgressComponent implements OnInit {
    @Input() number: number;
    @Input() description: number;
    @Input() minTime: number;
    @Input() maxTime: number;
    percent$: Observable<number>;

    constructor(private videoRenderingService: VideoRenderingService) {}

    ngOnInit(): void {
        this.percent$ = this.videoRenderingService.currentTime$.pipe(
            map((value: number) => this.videoRenderingService.getPercentFromValue(value, this.minTime, this.maxTime)),
        );
    }
}
