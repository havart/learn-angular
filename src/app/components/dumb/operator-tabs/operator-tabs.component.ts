import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-operator-tabs',
    templateUrl: './operator-tabs.component.html',
    styleUrls: ['./operator-tabs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OperatorTabsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
