import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
    @Input() items: string[];
    @Output() del = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {}
    isClick(val: string) {
        this.del.emit(val);
    }
}
