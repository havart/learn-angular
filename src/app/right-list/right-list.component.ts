import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-right-list',
    templateUrl: './right-list.component.html',
    styleUrls: ['./right-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightListComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
