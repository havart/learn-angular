import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CallStatusInterface } from '../../interfaces/call-status.interface';
import { ContactInterface } from '../../interfaces/contact.interface';
import { CallService } from '../../services/call.service';

@Component({
    selector: 'app-button-call',
    templateUrl: './button-call.component.html',
    styleUrls: ['./button-call.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCallComponent implements OnInit, OnDestroy {
    @Input() data: ContactInterface;
    public callStatus: CallStatusInterface;
    private widgetSubscription: Subscription;

    constructor(public readonly callService: CallService, private readonly changeDetectionRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.widgetSubscription = this.callService.callStatus$.subscribe((value: CallStatusInterface) => {
            this.callStatus = value;
            this.changeDetectionRef.detectChanges();
        });
    }

    ngOnDestroy(): void {
        this.widgetSubscription.unsubscribe();
    }

    public startCall(): void {
        const client = {
            name: `${this.data.firstName} ${this.data.lastName}`,
            phone: this.data.phone,
        };

        this.callService.makeCall(client);
    }
}
