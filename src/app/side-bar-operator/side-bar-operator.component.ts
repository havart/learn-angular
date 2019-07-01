import { Component, Input, OnInit } from '@angular/core';
import { SideBarService } from '../side-bar.service';

@Component({
    selector: 'app-side-bar-operator',
    templateUrl: './side-bar-operator.component.html',
    styleUrls: ['./side-bar-operator.component.scss'],
})
export class SideBarOperatorComponent implements OnInit {
    sideWorks: boolean;

    constructor(private sideBarService: SideBarService) {}

    ngOnInit() {
        this.sideBarService.sideWorks$.subscribe(value => (this.sideWorks = value));
    }
}
