import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MainTabConfig } from '../../../config/main-tab.config';

@Component({
    selector: 'app-main-tab',
    templateUrl: './main-tab.component.html',
    styleUrls: ['./main-tab.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainTabComponent implements OnInit {
    tabsArr: string[];
    constructor(private config: MainTabConfig) {}

    ngOnInit() {
        this.tabsArr = this.config.TABS;
    }
}
