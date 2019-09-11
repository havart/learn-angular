import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { VideoRenderingService } from '../../../services/video-rendering.service';
import { map, takeUntil, throttleTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-circle-progress',
    templateUrl: './circle-progress.component.html',
    styleUrls: ['./circle-progress.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleProgressComponent implements OnInit, OnDestroy {
    @Input() number: number;
    @Input() minTime: number;
    @Input() maxTime: number;
    percent: number;

    private unsubscribeCurrentTime$: Subject<void> = new Subject<void>();

    constructor(private videoRenderingService: VideoRenderingService, private changeDetectionRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.videoRenderingService.currentTime$
            .pipe(
                takeUntil(this.unsubscribeCurrentTime$),
                throttleTime(3000),
                map((value: number) => {
                    return this.videoRenderingService.getPercentFromValue(value, this.minTime, this.maxTime);
                }),
            )
            .subscribe((value: number) => {
                this.percent = value;
                this.changeDetectionRef.detectChanges();
            });
    }

    ngOnDestroy(): void {
        this.unsubscribeCurrentTime$.next();
        this.unsubscribeCurrentTime$.complete();
    }
}
