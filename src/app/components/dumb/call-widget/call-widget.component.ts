import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CallWidgetService } from '../../../services/call-widget.service';
import { BehaviorSubject, Observable, range, Subject, timer } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
import { delay, map, take, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-call-widget',
    templateUrl: './call-widget.component.html',
    styleUrls: ['./call-widget.component.scss'],
})
export class CallWidgetComponent implements OnInit, OnDestroy {
    spinnerDiameter = 25;
    userName$: Subject<string> = new BehaviorSubject<string>('');
    userName: string;
    callStatus: boolean;
    start: number;
    source: Observable<number>;
    @Input() timerTimeoutCall: number;

    private userNameUnsubscribe$: Subject<void> = new Subject<void>();

    constructor(private callWidgetService: CallWidgetService) {}

    ngOnInit(): void {
        this.callWidgetService.userName$.pipe(takeUntil(this.userNameUnsubscribe$)).subscribe((value: string) => {
            this.userName$.next(value);
        });
        this.callWidgetService.callStatus$.pipe(takeUntil(this.userNameUnsubscribe$)).subscribe((value: boolean) => {
            this.callStatus = value;
        });
        this.source = timer(1000, 1000).pipe(
            delay(2000),
            map(i => this.timerTimeoutCall - i),
            take(this.timerTimeoutCall + 1),
        );
        this.source.subscribe(i => console.log(i));
    }

    ngOnDestroy(): void {
        this.userNameUnsubscribe$.next();
        this.userNameUnsubscribe$.complete();
    }

    callToggle(): void {
        this.callStatus = !this.callStatus;
        this.callWidgetService.setCallStatus(this.callStatus);
    }
}
