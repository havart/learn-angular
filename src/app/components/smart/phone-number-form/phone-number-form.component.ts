import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ContactTabInterface } from '../../../interfaces/contact-tab.interface';
import { FormGroup } from '@angular/forms';
import { CallWidgetService } from '../../../services/call-widget.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
    selector: 'app-phone-number-form',
    templateUrl: './phone-number-form.component.html',
    styleUrls: ['./phone-number-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneNumberFormComponent implements OnInit {
    @Input() contactForm: FormGroup;
    @Input() contact: ContactTabInterface;
    callStatus = false;

    private contactId: number;

    constructor(private callWidgetService: CallWidgetService, private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.callWidgetService.callStatus$
            .pipe(filter(() => this.contact.id === this.contactId))
            .subscribe((value: boolean) => {
                this.callStatus = value;
                this.changeDetectorRef.detectChanges();
            });
    }

    toggleCall(contact: ContactTabInterface): void {
        this.contactId = contact.id;
        this.callStatus = !this.callStatus;
        this.callWidgetService.setCallStatus(this.callStatus);
        this.callWidgetService.setUserName(`${contact.firstName} + ${contact.lastName}`);
        this.callWidgetService.setPhoneNumber(this.contact.phone);
    }
}
