import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SideBarService } from '../../../services/side-bar.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-side-bar-operator',
    templateUrl: './side-bar-operator.component.html',
    styleUrls: ['./side-bar-operator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarOperatorComponent implements OnInit, OnDestroy {
    sideWorks: boolean;
    sideBarSubscription: Subscription;

    constructor(private sideBarService: SideBarService, private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit() {
        this.sideBarSubscription = this.sideBarService.sideWorks$.subscribe((value: boolean) => {
            this.sideWorks = value;
            this.changeDetectorRef.detectChanges();
        });
    }

    ngOnDestroy(): void {
        this.sideBarSubscription.unsubscribe();
    }
}
