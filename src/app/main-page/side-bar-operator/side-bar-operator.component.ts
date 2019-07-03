import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SideBarService } from '../../side-bar.service';

@Component({
    selector: 'app-side-bar-operator',
    templateUrl: './side-bar-operator.component.html',
    styleUrls: ['./side-bar-operator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarOperatorComponent implements OnInit {
    sideWorks: boolean;

    constructor(private sideBarService: SideBarService, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.sideBarService.sideWorks$.subscribe(value => {
            this.sideWorks = value;
            this.cdr.detectChanges();
        });
    }
}
