import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';
import { ContactTabInterface } from '../../../interfaces/contact-tab.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactEnum } from './contact.enum';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
    contactForm: FormGroup;
    @Input() itemContact: ContactTabInterface;

    constructor() {
        this.initContactForm();
    }

    initContactForm(): void {
        this.contactForm = new FormGroup({
            [ContactEnum.NUMBERPHONE]: new FormControl('', [Validators.required, Validators.maxLength(10)]),
            [ContactEnum.FULLNAME]: new FormControl('', [Validators.required, Validators.maxLength(99)]),
            [ContactEnum.PHONETYPE]: new FormControl('', Validators.required),
            [ContactEnum.DEPARTAMENT]: new FormControl('', Validators.required),
            [ContactEnum.COMMENT]: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
        });
    }
    submit() {}
}
