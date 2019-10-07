import { ChangeDetectionStrategy, Component, Input, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ContactTabInterface } from '../../../interfaces/contact-tab.interface';
import { FormGroup } from '@angular/forms';
import { PhoneWidgetService } from '../../feature/phone-widget/service/phone-widget.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-phone-number-form',
    templateUrl: './phone-number-form.component.html',
    styleUrls: ['./phone-number-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneNumberFormComponent implements OnInit, OnDestroy {
    @Input() contactForm: FormGroup;
    @Input() contact: ContactTabInterface;
    callStatus: boolean;
    isCall: boolean;
    isCallSubscriber: Subscription;

    constructor(private phoneWidgetService: PhoneWidgetService, private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.isCallSubscriber = this.phoneWidgetService.isCall$.subscribe(isCall => {
            this.isCall = isCall;
            if (!isCall) {
                this.callStatus = false;
                this.changeDetectorRef.detectChanges();
            }
        });
    }

    toggleCall(contact: number): void {
        if (!this.isCall && !this.callStatus) {
            this.callStatus = true;
            this.phoneWidgetService.startCall(this.contact.firstName, this.contact.lastName);
            // tslint:disable-next-line:no-console
            console.log(`Звоним на номер ${contact}`);
        } else if (this.isCall && this.callStatus) {
            this.phoneWidgetService.endCall();
        }
    }

    ngOnDestroy(): void {
        this.isCallSubscriber.unsubscribe();
    }
}
