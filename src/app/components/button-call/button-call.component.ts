import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button-call',
    templateUrl: './button-call.component.html',
    styleUrls: ['./button-call.component.scss'],
})
export class ButtonCallComponent {
    @Input() customStyle: {};
    constructor() {}
}
