import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactTabEnum } from './contact-tab.enum';
import { ContactTabService } from '../../../services/contact-tab.service';
import { Observable } from 'rxjs';
import { ContactTabInterface } from '../../../interfaces/contact-tab.interface';

@Component({
    selector: 'app-contact-tab',
    templateUrl: './contact-tab.component.html',
    styleUrls: ['./contact-tab.component.scss'],
})
export class ContactTabComponent implements OnInit {
    public informationList$: Observable<ContactTabInterface[]>;
    contactForm: FormGroup;

    constructor(private contactTabService: ContactTabService) {
        this.initContactForm();
    }

    ngOnInit() {
        this.getInformationFromServer();
    }
    initContactForm(): void {
        this.contactForm = new FormGroup({
            [ContactTabEnum.NUMBERPHONE]: new FormControl('', [Validators.required, Validators.maxLength(10)]),
            [ContactTabEnum.FULLNAME]: new FormControl('', [Validators.required, Validators.maxLength(99)]),
            [ContactTabEnum.PHONETYPE]: new FormControl('', Validators.required),
            [ContactTabEnum.DEPARTAMENT]: new FormControl('', Validators.required),
            [ContactTabEnum.COMMENT]: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
        });
    }
    submit() {}

    getInformationFromServer(): void {
        this.informationList$ = this.contactTabService.getInformationFromServer$();
    }
}
