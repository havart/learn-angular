import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
    @Input() items: string[];
    isVisibleButton = false;

    constructor() {}

    ngOnInit() {}

    deleteItem(index: number) {
        this.items.splice(index, 1);
        this.isVisibleButton = false;
    }
}
