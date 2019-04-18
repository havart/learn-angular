import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
    @Input() items: string[];
    @Output() del = new EventEmitter<string>();
    isClick(val: string) {
        this.del.emit(val);
    }

}
