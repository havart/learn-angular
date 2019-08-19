import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContactTabInterface } from '../../../interfaces/contact-tab.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactEnum } from './contact.enum';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
    @Input() contact: ContactTabInterface;
    contactForm: FormGroup;
    private callStatus: boolean;

    constructor() {}

    ngOnInit(): void {
        this.initContactForm();
    }

    initContactForm(): void {
        this.contactForm = new FormGroup({
            [ContactEnum.NUMBERPHONE]: new FormControl('', [Validators.required, Validators.maxLength(15)]),
            [ContactEnum.FULLNAME]: new FormControl('', [Validators.required, Validators.maxLength(99)]),
            [ContactEnum.PHONETYPE]: new FormControl('', Validators.required),
            [ContactEnum.DEPARTAMENT]: new FormControl('', Validators.required),
            [ContactEnum.COMMENT]: new FormControl('', [Validators.required, Validators.maxLength(999)]),
        });
    }
    submit(): void {}

    toggleCall(): void {
        this.callStatus = !this.callStatus;
    }
}
