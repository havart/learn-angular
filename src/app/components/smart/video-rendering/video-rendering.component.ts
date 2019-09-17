import {
    Component,
    ChangeDetectionStrategy,
    ViewChild,
    ElementRef,
    Input,
    ChangeDetectorRef,
    AfterViewInit,
    ViewChildren,
    QueryList,
    Renderer2,
} from '@angular/core';
import { SnapshotPointInterface } from 'src/app/interfaces/snapshot-point.interface';
import { CircleProgressComponent } from 'ng-circle-progress';

@Component({
    selector: 'app-video-rendering',
    templateUrl: './video-rendering.component.html',
    styleUrls: ['./video-rendering.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoRenderingComponent implements AfterViewInit {
    @Input('snapshotPoints')
    public snapshotPoints: ReadonlyArray<SnapshotPointInterface>;
    @Input('sourceVideo')
    public sourceVideo: string;
    @Input('title')
    public title: string;

    @ViewChild('video')
    private video: ElementRef;
    @ViewChildren('circleProgresses')
    private circleProgresses: QueryList<CircleProgressComponent>;

    private arrayCircleProgresses: CircleProgressComponent[];
    private percent: number;

    constructor(private changeDetectorRef: ChangeDetectorRef, private render: Renderer2) {}

    ngAfterViewInit(): void {
        this.percent = 0;
        this.arrayCircleProgresses = this.circleProgresses.toArray();
        this.circleProgressesInit();
        let timeZoneCircleProgresses: number[][];
        this.video.nativeElement.addEventListener(
            'timeupdate',
            function(): void {
                if (!timeZoneCircleProgresses) {
                    timeZoneCircleProgresses = this.timeZoneCircleProgressesInit();
                }
                timeZoneCircleProgresses.forEach((item: number[], index: number) => {
                    let currentTime = this.video.nativeElement.currentTime;
                    const startTime = item[0];
                    const endTime = item[1];
                    if (currentTime > startTime && currentTime < endTime) {
                        const range = endTime - startTime;
                        currentTime = currentTime - startTime;
                        const newPercent = Math.floor((currentTime / range) * 100);
                        this.arrayCircleProgresses[index].draw(newPercent);
                        if (newPercent > this.percent) {
                            this.changeDetectorRef.detectChanges();
                            this.percent = newPercent;
                        }
                    }
                });
            }.bind(this),
        );
    }

    timeZoneCircleProgressesInit(): number[][] {
        return this.snapshotPoints.map((snapshotPoint: SnapshotPointInterface, index: number) => {
            if (index !== this.snapshotPoints.length - 1) {
                return [snapshotPoint.timestamp, this.snapshotPoints[index + 1].timestamp];
            }

            return [snapshotPoint.timestamp, this.video.nativeElement.duration];
        });
    }

    circleProgressesInit(): void {
        this.arrayCircleProgresses.forEach((circleProgress: CircleProgressComponent, index: number) => {
            if (index === 0) {
                this.arrayCircleProgresses[index].options.percent = 1;
            }
            circleProgress.options.title = (index + 1).toString();
            circleProgress.draw(0);
            this.changeDetectorRef.detectChanges();
        });
    }

    changeTime(timestamp: number, i: number): void {
        this.render.setProperty(this.video.nativeElement, 'currentTime', timestamp);
        this.arrayCircleProgresses.forEach((circleProgress: CircleProgressComponent, index: number) => {
            if (index === i) {
                this.arrayCircleProgresses[index].options.percent = 1;
                this.arrayCircleProgresses[index].draw(0);
            } else if (index < i) {
                this.arrayCircleProgresses[index].options.percent = 100;
                this.arrayCircleProgresses[index].draw(100);
            } else {
                this.arrayCircleProgresses[index].options.percent = 0;
            }
        });
        this.video.nativeElement.play();
        this.percent = 0;
        this.changeDetectorRef.detectChanges();
    }
}
