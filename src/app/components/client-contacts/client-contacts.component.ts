import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactsFormControlEnum } from '../contacts/form-contact-enum';
import { GetContactsService } from 'src/app/services/get-contacts';
import { Observable } from 'rxjs';
import { ContactInterface } from 'src/app/interfaces/contact.interface';

@Component({
    selector: 'app-client-contacts',
    templateUrl: './client-contacts.component.html',
    styleUrls: ['./client-contacts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientContactsComponent implements OnInit {
    public clientContactsForm: FormGroup;
    public contacts$: Observable<ContactInterface[]>;
    contactsFormControlEnum: typeof ContactsFormControlEnum = ContactsFormControlEnum;

    constructor(private readonly formBuilder: FormBuilder, private readonly getContactsService: GetContactsService) {}

    ngOnInit(): void {
        this.initContactsForm();
        this.contacts$ = this.getContactsService.getContacts$();
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
