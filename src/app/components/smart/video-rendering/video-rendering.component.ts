import { ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { VideoRenderingService } from '../../../services/video-rendering.service';
import { ListOfStepsInterface } from '../../../interfaces/list-of-steps.interface';
import { STEP_LIST } from '../../../constants/snapshot-point.constants';
import { fromEvent, Subscription } from 'rxjs';

@Component({
    selector: 'app-video-rendering',
    templateUrl: './video-rendering.component.html',
    styleUrls: ['./video-rendering.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoRenderingComponent implements OnInit, OnDestroy {
    @ViewChild('videoPlayer') videoPlayer: ElementRef;
    @Input() sourceVideo: string;
    currentTime: number;
    listOfSteps: ReadonlyArray<ListOfStepsInterface>;

    private videoEventTimeUpdateSubscription: Subscription;

    constructor(private videoRenderingService: VideoRenderingService) {}

    ngOnInit(): void {
        this.listOfSteps = STEP_LIST;
        this.videoEventTimeUpdateSubscription = fromEvent(this.videoPlayer.nativeElement, 'timeupdate').subscribe(
            () => {
                this.videoRenderingService.setCurrentTime$(this.videoPlayer.nativeElement.currentTime);
            },
        );
    }

    ngOnDestroy(): void {
        this.videoEventTimeUpdateSubscription.unsubscribe();
    }

    toSnapShotPoint(minTime: number): void {
        this.videoPlayer.nativeElement.currentTime = minTime;
        this.videoRenderingService.setCurrentTime$(this.videoPlayer.nativeElement.currentTime);
    }
}