import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CallStatusInterface } from '../../interfaces/call-status.interface';
import { CallService } from '../../services/call.service';

@Component({
    selector: 'app-button-call',
    templateUrl: './button-call.component.html',
    styleUrls: ['./button-call.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCallComponent implements OnInit, OnDestroy {
    @Input() data: any;
    public callStatus: CallStatusInterface;
    private widgetSubscription: Subscription;

    constructor(public readonly callService: CallService, private readonly changeDetectionRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.widgetSubscription = this.callService.callStatus$.subscribe((value: CallStatusInterface) => {
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
        this.callService.setCallStatus(true, 'isCall');
        this.callService.setCallStatus(true, 'isDelay');
        this.callService.setData({ name: checkClient, phone: data.phone });
    }
}
