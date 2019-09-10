import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SnapshotPoint } from 'src/app/interfaces/snapshot-point.interface';

@Component({
    selector: 'app-video-rendering-tab',
    templateUrl: './video-rendering-tab.component.html',
    styleUrls: ['./video-rendering-tab.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoRenderingTabComponent implements OnInit {
    snapshotPoints: SnapshotPoint[];
    sourceVideo: string;
    title: string;

    constructor() {}

    ngOnInit(): void {
        this.snapshotPoints = [
            { description: 'Соедините кассу и терминал с помощью кабеля', timestamp: 0 },
            { description: 'На экране кассы нажмите на кнопки', timestamp: 50 },
            { description: 'Забудьте все, что вам сказали', timestamp: 300 },
        ];
        this.sourceVideo = '../../../../assets/video.mp4';
        this.title = 'Выполните действия:';
    }
}
