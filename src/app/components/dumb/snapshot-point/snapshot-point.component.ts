import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SnapshotPointInterface } from 'src/app/interfaces/snapshot-point.interface';

@Component({
    selector: 'app-snapshot-point',
    templateUrl: './snapshot-point.component.html',
    styleUrls: ['./snapshot-point.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnapshotPointComponent implements OnInit {
    @Input('percent$')
    public percent$: BehaviorSubject<number>;
    @Input('index')
    public index: number;
    @Input('snapshotPoint')
    public snapshotPoint: SnapshotPointInterface;
    public percent: number;

    constructor(private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.index += 1;
        this.percent$.subscribe(percent => {
            this.percent = percent;
            this.changeDetectorRef.detectChanges();
        });
    }
}
