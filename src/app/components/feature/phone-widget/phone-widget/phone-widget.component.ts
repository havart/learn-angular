import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { PhoneWidgetService } from '../service/phone-widget.service';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-phone-widget',
    templateUrl: './phone-widget.component.html',
    styleUrls: ['./phone-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneWidgetComponent implements OnInit, OnDestroy {
    isCall: boolean;
    second: number;
    isEndTimer: boolean;
    isDialingNumber = false;
    fullName$: Observable<string>;
    diameterSpinner = 17;
    private callProcessSubscription: Subscription;
    private callSubscription: Subscription;

    constructor(private phoneWidgetService: PhoneWidgetService, private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.fullName$ = this.phoneWidgetService.fullname$;
        this.callProcessInit();
    }

    callProcessInit(): void {
        this.callProcessSubscription = this.phoneWidgetService.isCall$.subscribe((isCall: boolean) => {
            this.isCall = isCall;

            if (isCall) {
                this.dialingAndTalking();
            } else if (this.callSubscription && !isCall) {
                this.callSubscription.unsubscribe();
                this.isDialingNumber = false;
            }
            this.changeDetectorRef.detectChanges();
        });
    }

    dialingAndTalking(): void {
        this.callSubscription = this.phoneWidgetService.call$().subscribe((value: number | string) => {
            if (typeof value === 'number') {
                this.second = value - 1;
                this.isEndTimer = value === 0;
            } else {
                this.second = this.phoneWidgetService.seconds;
                this.isDialingNumber = value === 'start';
            }
            this.changeDetectorRef.detectChanges();
        });
    }

    endCall(): void {
        this.phoneWidgetService.endCall();
    }

    ngOnDestroy(): void {
        this.callProcessSubscription.unsubscribe();
    }
}
