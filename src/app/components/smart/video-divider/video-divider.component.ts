import { Component, OnInit, Input, ElementRef, ViewChild, ChangeDetectionStrategy, Renderer2 } from '@angular/core';
import { SnapshotPointInterface } from 'src/app/interfaces/snapshot-point.interface';

@Component({
    selector: 'app-video-divider',
    templateUrl: './video-divider.component.html',
    styleUrls: ['./video-divider.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoDividerComponent implements OnInit {
    @Input('snapshotPoints')
    public snapshotPoints: ReadonlyArray<SnapshotPointInterface>;
    @Input('sourceVideo')
    public sourceVideo: string;
    @Input('title')
    public title: string;

    public percents: number[];

    @ViewChild('video')
    private video: ElementRef;

    private timeZoneCircleProgresses: number[][];
    private percent: number;

    constructor(private render: Renderer2) {}

    ngOnInit(): void {
        this.percents = [];
        this.snapshotPoints.forEach(item => {
            this.percents.push(0);
        });
        this.percent = 0;
    }

    timeZoneCircleProgressesInit(): number[][] {
        return this.snapshotPoints.map((snapshotPoint: SnapshotPointInterface, index: number) => {
            if (index !== this.snapshotPoints.length - 1) {
                return [snapshotPoint.timestamp, this.snapshotPoints[index + 1].timestamp];
            }

            return [snapshotPoint.timestamp, this.video.nativeElement.duration];
        });
    }

    workWithTime(): void {
        if (!this.timeZoneCircleProgresses) {
            this.timeZoneCircleProgresses = this.timeZoneCircleProgressesInit();
        }
        this.timeZoneCircleProgresses.forEach((item: number[], index: number) => {
            let currentTime = this.video.nativeElement.currentTime;
            const startTime = item[0];
            const endTime = item[1];
            if (currentTime > startTime && currentTime < endTime) {
                const range = endTime - startTime;
                currentTime = currentTime - startTime;
                const newPercent = Math.floor((currentTime / range) * 101);
                if (this.percent < newPercent) {
                    this.percents[index] = newPercent;
                }
                this.percent = newPercent;
            }
        });
    }

    changeTime(timestamp: number, i: number): void {
        this.render.setProperty(this.video.nativeElement, 'currentTime', timestamp);
        this.percents = this.percents.map((item: number, index: number) => {
            if (index < i) {
                return 100;
            }

            return 0;
        });
        this.video.nativeElement.play();
    }
}
