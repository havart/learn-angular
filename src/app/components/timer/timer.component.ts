import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit, OnDestroy {
    @Input() count: number;
    public interval = 1000;
    public isTimerStoped = false;
    private readonly onDestroy$ = new Subject<boolean>();

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        timer(500, this.interval)
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
