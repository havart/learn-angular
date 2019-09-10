import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { VideoRenderingService } from '../../../services/video-rendering.service';
import { map } from 'rxjs/operators';

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
    duration: number;

    constructor(private videoRenderingService: VideoRenderingService, private changeDetectionRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.videoRenderingService.currentTime$
            .pipe(
                map((value: number) => {
                    return Math.floor((100 / (this.maxTime - this.minTime)) * (value - this.minTime));
                }),
            )
            .subscribe((value: number) => {
                this.duration = value;
                this.changeDetectionRef.detectChanges();
            });
    }
}
