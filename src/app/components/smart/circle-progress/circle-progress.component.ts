import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { VideoRenderingService } from '../../../services/video-rendering.service';
import { map, throttleTime } from 'rxjs/operators';

@Component({
    selector: 'app-circle-progress',
    templateUrl: './circle-progress.component.html',
    styleUrls: ['./circle-progress.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleProgressComponent implements OnInit {
    @Input() number: number;
    @Input() minTime: number;
    @Input() maxTime: number;
    percent: number;

    constructor(private videoRenderingService: VideoRenderingService, private changeDetectionRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.videoRenderingService.currentTime$
            .pipe(
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
}
