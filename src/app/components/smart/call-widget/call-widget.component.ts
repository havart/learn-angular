import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CallWidgetService } from '../../../services/call-widget.service';
import { BehaviorSubject, Observable, Subject, timer } from 'rxjs';
import { delay, map, take, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-call-widget',
    templateUrl: './call-widget.component.html',
    styleUrls: ['./call-widget.component.scss'],
})
export class CallWidgetComponent implements OnInit, OnDestroy {
    userName: string;
    callStatus: boolean;
    spinnerDiameter = 25;
    microStatus: boolean;
    sourceTimer$: Observable<number>;
    userName$: Subject<string> = new BehaviorSubject<string>('');
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

        this.sourceTimer$ = timer(1000, 1000).pipe(
            delay(2000),
            map(i => this.timerTimeoutCall - i),
            take(this.timerTimeoutCall + 1),
        );
        this.sourceTimer$.subscribe();
    }

    toggleMicrophone(): void {
        this.microStatus = !this.microStatus;
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
