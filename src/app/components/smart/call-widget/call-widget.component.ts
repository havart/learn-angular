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
    userName$: Observable<string>;
    sourceTimer$: Observable<number>;
    @Input() timerTimeoutCall: number;

    private userNameUnsubscribe$: Subject<void> = new Subject<void>();

    constructor(private callWidgetService: CallWidgetService) {}

    ngOnInit(): void {
        this.userName$ = this.callWidgetService.userName$.pipe(takeUntil(this.userNameUnsubscribe$));

        this.sourceTimer$ = timer(1000, 1000).pipe(
            delay(2000),
            map(i => this.timerTimeoutCall - i),
            take(this.timerTimeoutCall + 1),
        );
        this.sourceTimer$.subscribe();
    }

    ngOnDestroy(): void {
        this.userNameUnsubscribe$.next();
        this.userNameUnsubscribe$.complete();
    }
}
