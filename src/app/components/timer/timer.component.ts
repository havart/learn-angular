import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { timer, Subject } from 'rxjs';
import { take, tap, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit, OnDestroy {
    public interval = 1000;
    public isTimerStoped = false;
    @Input() count: number;
    private readonly onDestroy$ = new Subject<boolean>();

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}
    ngOnInit(): void {
        timer(0, this.interval)
            .pipe(
                take(this.count),
                tap(() => {
                    --this.count;

                    if (this.count === 0) {
                        this.isTimerStoped = true;
                    }
                }),
                takeUntil(this.onDestroy$),
            )
            .subscribe(() => this.changeDetectorRef.detectChanges());
    }

    ngOnDestroy(): void {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}
