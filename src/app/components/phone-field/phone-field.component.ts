import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactInterface } from '../../interfaces/contact.interface';
import { ContactsFormControlEnum } from '../contacts/form-contact-enum';

@Component({
    selector: 'app-phone-field',
    templateUrl: './phone-field.component.html',
    styleUrls: ['./phone-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneFieldComponent implements OnInit {
    public phoneInputForm: FormGroup;
    public contactsFormControlEnum: typeof ContactsFormControlEnum = ContactsFormControlEnum;
    @Input() contact: ContactInterface;

    constructor(private readonly formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.initPhoneInputForm();
    }

    private initPhoneInputForm(): void {
        const form = {
            [this.contactsFormControlEnum.PHONE]: [this.contact.phone, [Validators.required]],
        };

        this.phoneInputForm = this.formBuilder.group(form);
    }
}
