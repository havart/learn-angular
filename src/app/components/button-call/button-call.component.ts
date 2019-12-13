import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-button-call',
    templateUrl: './button-call.component.html',
    styleUrls: ['./button-call.component.scss'],
})
export class ButtonCallComponent {
    @Output() onClicked = new EventEmitter<boolean>();

    constructor() {}

    public startCall(): void {
        this.onClicked.emit(true);
    }
}
