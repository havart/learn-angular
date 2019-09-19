import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContactTabInterface } from '../../../interfaces/contact-tab.interface';
import { FormGroup } from '@angular/forms';
import { CallWidgetService } from '../../../services/call-widget.service';

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

    constructor(private callWidgetService: CallWidgetService) {}

    ngOnInit(): void {}

    toggleCall(contact): void {
        this.callStatus = !this.callStatus;
        this.callWidgetService.setPhoneNumber(this.contact.phone);
        this.callWidgetService.setUserName(1231);
        console.log(`${this.contact.firstName} + ${this.contact.lastName}`);
        this.callWidgetService.setCallStatus(this.callStatus);
    }
}
