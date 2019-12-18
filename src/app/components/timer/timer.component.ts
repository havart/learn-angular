import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { take, takeWhile, tap } from 'rxjs/operators';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
    public interval = 1000;
    public count = 20;
    public isTimerStoped = false;

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
                takeWhile(() => !this.isTimerStoped),
            )
            .subscribe();
    }
}
