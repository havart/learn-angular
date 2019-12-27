import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { delay, map, takeUntil, tap } from 'rxjs/operators';
import { ClientWidgetInterface } from '../../interfaces/client-widget.interface';
import { CallService } from '../../services/call.service';
import { widgetSettings } from '../../configs/widget-settings.const';

@Component({
    selector: 'app-phone-widget',
    templateUrl: './phone-widget.component.html',
    styleUrls: ['./phone-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneWidgetComponent implements OnInit, OnDestroy {
    public nameAndPhone$: Observable<ClientWidgetInterface>;
    public micIcon = true;
    public isCall: boolean;
    public isConnecting: boolean;
    public isConnected: boolean;
    public isErrorConnection: boolean;
    public widgetSettings = widgetSettings;

    private readonly onDestroy$ = new Subject<boolean>();

    constructor(private readonly callService: CallService, private readonly changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.callService
            .getCallStatus$()
            .pipe(
                map(({ call, connecting, connected, error_connect }) => {
                    this.isCall = call;
                    this.isConnecting = connecting;
                    this.isConnected = connected;
                    this.isErrorConnection = error_connect;
                    this.changeDetectorRef.detectChanges();
                }),
                delay(this.widgetSettings.connectingTime),
                tap(() => {
                    if (this.isConnecting) {
                        this.callService.makeConnection();
                        this.changeDetectorRef.detectChanges();
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
        this.callService.endCall();
    }
}
