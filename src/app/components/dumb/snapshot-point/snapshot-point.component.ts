import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SnapshotPointInterface } from 'src/app/interfaces/snapshot-point.interface';

@Component({
    selector: 'app-snapshot-point',
    templateUrl: './snapshot-point.component.html',
    styleUrls: ['./snapshot-point.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnapshotPointComponent implements OnInit {
    @Input() public percent: number;
    @Input() public index: number;
    @Input() public snapshotPoint: SnapshotPointInterface;

    constructor() {}

    ngOnInit(): void {
        this.index += 1;
    }
}
