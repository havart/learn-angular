import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactInterface } from 'src/app/interfaces/contact.interface';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
    selector: 'app-client-contacts',
    templateUrl: './client-contacts.component.html',
    styleUrls: ['./client-contacts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientContactsComponent implements OnInit {
    public contacts$: Observable<ContactInterface[]>;

    constructor(private readonly contactsService: ContactsService) {}

    ngOnInit(): void {
        this.contacts$ = this.contactsService.fetchContacts$();
    }
}
