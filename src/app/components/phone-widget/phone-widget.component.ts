import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { delay, map, takeUntil, tap } from 'rxjs/operators';
import { getRandomIdHelper } from '../../helpers/get-random-id.helper';
import { WidgetDataInterface } from '../../interfaces/widget-data.interface';
import { CallService } from '../../services/call.service';

@Component({
    selector: 'app-phone-widget',
    templateUrl: './phone-widget.component.html',
    styleUrls: ['./phone-widget.component.scss'],
})
export class PhoneWidgetComponent implements OnInit, OnDestroy {
    public nameAndPhone$: Observable<WidgetDataInterface>;
    public micIcon = true;
    public isCall: boolean;
    public isDelay: boolean;
    public isConnected: boolean;
    public isErrorConnection: boolean;

    private readonly onDestroy$ = new Subject<boolean>();

    constructor(private callService: CallService) {}

    ngOnInit(): void {
        this.callService
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
                        this.callService.setCallStatus(false, 'isDelay');
                        this.connectCall();
                    }
                }),
                takeUntil(this.onDestroy$),
            )
            .subscribe();
        this.nameAndPhone$ = this.callService.data$();
    }

    ngOnDestroy(): void {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }

    public toggleMic(): boolean {
        return (this.micIcon = !this.micIcon);
    }

    public endCall(): void {
        this.callService.setCallStatus(false, 'isCall');
        this.callService.setCallStatus(false, 'callStarted');
        this.callService.setCallStatus(false, 'errorCall');
        this.callService.setData(null);
    }

    private connectCall(): void {
        const randomNumber = getRandomIdHelper(1, 20);

        return randomNumber < 10
            ? this.callService.setCallStatus(true, 'callStarted')
            : this.callService.setCallStatus(true, 'errorCall');
    }
}
