import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContactTabInterface } from '../../../interfaces/contact-tab.interface';
import { FormGroup } from '@angular/forms';

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

    constructor() {}

    ngOnInit(): void {}

    toggleCall(contact): void {
        this.callStatus = !this.callStatus;
      // tslint:disable-next-line:no-console
        console.log(`Звоним на номер ${contact}`);
    }
}
