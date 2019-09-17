import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { VideoRenderingService } from '../../../services/video-rendering.service';
import { ListOfStepsInterface } from '../../../interfaces/list-of-steps.interface';
import { STEP_LIST } from '../../../constants/snapshot-point.constants';

@Component({
    selector: 'app-video-rendering',
    templateUrl: './video-rendering.component.html',
    styleUrls: ['./video-rendering.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoRenderingComponent implements OnInit {
    @ViewChild('videoPlayer') videoPlayer: ElementRef;
    @Input() sourceVideo: string;
    currentTime: number;
    listOfSteps: ReadonlyArray<ListOfStepsInterface>;

    constructor(private videoRenderingService: VideoRenderingService) {}

    ngOnInit(): void {
        this.listOfSteps = STEP_LIST;
        this.videoPlayer.nativeElement.addEventListener('timeupdate', () => {
            this.videoRenderingService.setCurrentTime$(this.videoPlayer.nativeElement.currentTime);
        });
    }

    toSnapShotPoint(minTime: number): void {
        this.videoPlayer.nativeElement.currentTime = minTime;
        this.videoRenderingService.setCurrentTime$(this.videoPlayer.nativeElement.currentTime);
    }
}
