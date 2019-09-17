import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SnapshotPointInterface } from 'src/app/interfaces/snapshot-point.interface';
import { constSnapshotPoints, constSourceVideo, constTitle } from '../../../constants/video-rendering.constans';

@Component({
    selector: 'app-video-rendering-tab',
    templateUrl: './video-rendering-tab.component.html',
    styleUrls: ['./video-rendering-tab.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoRenderingTabComponent implements OnInit {
    snapshotPoints: ReadonlyArray<SnapshotPointInterface>;
    sourceVideo: string;
    title: string;

    constructor() {}

    ngOnInit(): void {
        this.snapshotPoints = constSnapshotPoints;
        this.sourceVideo = constSourceVideo;
        this.title = constTitle;
    }
}
