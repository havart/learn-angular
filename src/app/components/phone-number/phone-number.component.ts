import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-phone-number',
    templateUrl: './phone-number.component.html',
    styleUrls: ['./phone-number.component.scss'],
})
export class PhoneNumberComponent {
    @Input() data: string;
    callStatus: boolean;

    toggleCall(phone): void {
        this.callStatus = !this.callStatus;
        alert(`Call to ${phone}`);
    }
}
