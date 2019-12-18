import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CallStatusInterface } from '../../interfaces/call-status.interface';
import { WidgetCallService } from '../../services/widget-call.service';

@Component({
    selector: 'app-phone-number',
    templateUrl: './button-call.component.html',
    styleUrls: ['./button-call.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCallComponent implements OnInit, OnDestroy {
    @Input() data: any;
    public callStatus: CallStatusInterface;
    private widgetSubscription: Subscription;

    constructor(
        public readonly widgetCallService: WidgetCallService,
        private readonly changeDetectionRef: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        this.widgetSubscription = this.widgetCallService.callStatus$.subscribe((value: CallStatusInterface) => {
            this.callStatus = value;
            this.changeDetectionRef.markForCheck();
        });
    }

    ngOnDestroy(): void {
        this.widgetSubscription.unsubscribe();
    }

    toggleCall(data): void {
        let checkClient: string;
        if (data.name) {
            checkClient = data.name;
        } else {
            checkClient = `${data.firstName} ${data.lastName}`;
        }
        this.widgetCallService.setCallStatus(true, 'isCall');
        this.widgetCallService.setCallStatus(true, 'isDelay');
        this.widgetCallService.setData({ name: checkClient, phone: data.phone });
    }
}
