import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { VideoRenderingService } from '../../../services/video-rendering.service';
import { ListOfStepsInterface } from '../../../interfaces/list-of-steps.interface';

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
    listOfSteps: ListOfStepsInterface[];

    constructor(private videoRenderingService: VideoRenderingService) {}

    ngOnInit(): void {
        this.listOfSteps = [
            {
                description: 'Соедините кассу и терминал с помощью кабеля MicroUSB -> MicroUSB-A',
                minTime: 0,
                maxTime: 220,
            },
            { description: 'На экране кассы нажмите...', minTime: 220, maxTime: 436 },
        ];
        this.videoPlayer.nativeElement.addEventListener('timeupdate', () => {
            this.videoRenderingService.currentTime$.next(this.videoPlayer.nativeElement.currentTime);
        });
    }
}
