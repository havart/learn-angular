import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CallWidgetService } from '../../../services/call-widget.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
import { takeUntil } from 'rxjs/operators';

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

    private userNameUnsubscribe$: Subject<void> = new Subject<void>();

    constructor(private callWidgetService: CallWidgetService) {}

    ngOnInit(): void {
        this.callWidgetService.userName$.pipe(takeUntil(this.userNameUnsubscribe$)).subscribe((value: string) => {
            this.userName$.next(value);
        });
        this.callWidgetService.callStatus$.subscribe((value: boolean) => {
            this.callStatus = value;
            console.log(value)
        });
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
