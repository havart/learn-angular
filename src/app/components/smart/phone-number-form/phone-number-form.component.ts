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
    callStatus: boolean;

    constructor(private callWidgetService: CallWidgetService) {}

    ngOnInit(): void {
        this.callWidgetService.callStatus$.subscribe((value: boolean) => {
          console.log(value)
          this.callStatus = value;
        });
    }

    toggleCall(contact): void {
        this.callStatus = !this.callStatus;
        this.callWidgetService.setCallStatus(this.callStatus);
        this.callWidgetService.setUserName(`${contact.firstName} + ${contact.lastName}`);

        this.callWidgetService.setPhoneNumber(this.contact.phone);
    }
}
