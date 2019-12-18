import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { delay, map, takeUntil, tap } from 'rxjs/operators';
import { getRandomIdHelper } from '../../helpers/get-random-id.helper';
import { WidgetDataInterface } from '../../interfaces/widget-data.interface';
import { WidgetCallService } from '../../services/widget-call.service';

@Component({
    selector: 'app-widget-call',
    templateUrl: './widget-call.component.html',
    styleUrls: ['./widget-call.component.scss'],
})
export class WidgetCallComponent implements OnInit, OnDestroy {
    public nameAndPhone$: Observable<WidgetDataInterface>;
    public micIcon = true;
    public isCall: boolean;
    public isDelay: boolean;
    public isConnected: boolean;
    public isErrorConnection: boolean;

    private readonly onDestroy$ = new Subject<boolean>();

    constructor(private widgetCallService: WidgetCallService) {}

    ngOnInit(): void {
        this.widgetCallService
            .getCallStatus$()
            .pipe(
                map(({ isCall, isDelay, callStarted, errorCall }) => {
                    this.isCall = isCall;
                    this.isDelay = isDelay;
                    this.isConnected = callStarted;
                    this.isErrorConnection = errorCall;
                }),
                delay(2000),
                tap(() => {
                    if (this.isDelay) {
                        this.widgetCallService.setCallStatus(false, 'isDelay');
                        this.connectCall();
                    }
                }),
                takeUntil(this.onDestroy$),
            )
            .subscribe();
        this.nameAndPhone$ = this.widgetCallService.data$();
    }

    ngOnDestroy(): void {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }

    public toggleMic(): boolean {
        return (this.micIcon = !this.micIcon);
    }

    public endCall(): void {
        this.widgetCallService.setCallStatus(false, 'isCall');
        this.widgetCallService.setCallStatus(false, 'callStarted');
        this.widgetCallService.setCallStatus(false, 'errorCall');
        this.widgetCallService.setData(null);
    }

    private connectCall(): void {
        const randomNumber = getRandomIdHelper(1, 20);

        return randomNumber < 10
            ? this.widgetCallService.setCallStatus(true, 'callStarted')
            : this.widgetCallService.setCallStatus(true, 'errorCall');
    }
}
