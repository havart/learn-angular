import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-phone-number',
    templateUrl: './button-call.component.html',
    styleUrls: ['./button-call.component.scss'],
})
export class ButtonCallComponent {
    @Input() data: string;
    callStatus: boolean;

    toggleCall(phone): void {
        this.callStatus = !this.callStatus;
        alert(`Call to ${phone}`);
    }
}
