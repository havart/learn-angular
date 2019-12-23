import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CallService } from '../../services/call.service';
import { Observable, Subject } from 'rxjs';
import { map, delay, tap, takeUntil } from 'rxjs/operators';
import { ClientWidgetInterface } from '../../interfaces/client-widget.interface';
import { CallStatusInterface } from '../../interfaces/call-status.interface';
import { CallStatusEnum } from '../../enums/call-status.enum';
import { widgetSettings } from '../../configs/widget-settings.const';

@Component({
    selector: 'app-phone-widget',
    templateUrl: './phone-widget.component.html',
    styleUrls: ['./phone-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneWidgetComponent implements OnInit, OnDestroy {
    public icon = true;
    public client$: Observable<ClientWidgetInterface>;
    public connecting: boolean;
    public isConnected: boolean;
    public isErrorConnection: boolean;
    public isCall: boolean;
    public callStatusEnum: typeof CallStatusEnum = CallStatusEnum;
    public widgetSettings = widgetSettings;
    private readonly onDestroy$ = new Subject<boolean>();

    constructor(private readonly callService: CallService, private readonly changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.callService
            .getCallStatus$()
            .pipe(
                map(({ call, connecting, connected, error_connect }: CallStatusInterface) => {
                    this.isCall = call;
                    this.connecting = connecting;
                    this.isConnected = connected;
                    this.isErrorConnection = error_connect;
                    this.changeDetectorRef.detectChanges();
                }),
                delay(this.widgetSettings.connectingTime),
                tap(() => {
                    if (this.connecting) {
                        this.callService.makeConnection();
                        this.changeDetectorRef.detectChanges();
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
        this.callService.endCall();
    }
}
