import { Component, OnInit, OnDestroy } from '@angular/core';
import { CallService } from '../../services/call.service';
import { Observable, Subject } from 'rxjs';
import { map, delay, tap, takeUntil } from 'rxjs/operators';
import { getRandomIdHelper } from '../../helpers/get-random-id.helper';
import { ClientWidgetInterface } from 'src/app/interfaces/client-widget.interface';

@Component({
    selector: 'app-widget-call',
    templateUrl: './widget-call.component.html',
    styleUrls: ['./widget-call.component.scss'],
})
export class WidgetCallComponent implements OnInit, OnDestroy {
    public icon = true;
    public client$: Observable<ClientWidgetInterface>;
    public delayNumber: boolean;
    public isConnected: boolean;
    public isErrorConnection: boolean;
    public isCall: boolean;
    private readonly onDestroy$ = new Subject<boolean>();

    constructor(private readonly callService: CallService) {}

    ngOnInit(): void {
        this.callService
            .getCallStatus$()
            .pipe(
                map(({ isCall, isDelay, callStarted, errorCall }) => {
                    this.isCall = isCall;
                    this.delayNumber = isDelay;
                    this.isConnected = callStarted;
                    this.isErrorConnection = errorCall;
                }),
                delay(2000),
                tap(() => {
                    if (this.delayNumber) {
                        this.callService.setCallStatus(false, 'isDelay');
                        this.connectClient();
                    }
                }),
                takeUntil(this.onDestroy$),
            )
            .subscribe();

        this.client$ = this.callService.client$();
    }

    ngOnDestroy(): void {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }

    public toggleMic(): boolean {
        return (this.icon = !this.icon);
    }

    public endCall(): void {
        this.callService.setCallStatus(false, 'isCall');
        this.callService.setCallStatus(false, 'callStarted');
        this.callService.setCallStatus(false, 'errorCall');
        this.callService.setClient(null);
    }

    private connectClient(): void {
        const randomNumber = getRandomIdHelper(1, 20);

        return randomNumber < 10
            ? this.callService.setCallStatus(true, 'callStarted')
            : this.callService.setCallStatus(true, 'errorCall');
    }
}
