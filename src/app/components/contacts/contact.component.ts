import { Component, ChangeDetectionStrategy, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactInterface } from 'src/app/interfaces/contact.interface';
import { ContactsFormControlEnum } from './form-contact-enum';
import { PHONE_TYPES } from './phone-types';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit {
    public clientContactsForm: FormGroup;
    public phoneTypes = PHONE_TYPES;
    contactsFormControlEnum: typeof ContactsFormControlEnum = ContactsFormControlEnum;
    @Input() contact: Observable<ContactInterface>;

    constructor(private readonly formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.initContactsForm();
    }

    private initContactsForm(): void {
        this.clientContactsForm = this.formBuilder.group({
            [this.contactsFormControlEnum.PHONE]: ['', [Validators.required]],
            [this.contactsFormControlEnum.CLIENT_NAME]: ['', [Validators.required]],
            [this.contactsFormControlEnum.PHONE_TYPE]: ['', [Validators.required]],
            [this.contactsFormControlEnum.CONTACTS_TYPE]: ['', [Validators.required]],
            [this.contactsFormControlEnum.COMMENT]: ['', [Validators.required]],
        });
    }
}
