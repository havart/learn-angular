import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CONTACT, LABOR_ACTIVITY } from '../../../constants/path.constans';
import { BehaviorSubject, fromEvent, Observable, Subscription } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import { HeaderService } from '../../../services/header.service';

@Component({
    selector: 'app-operator-base',
    templateUrl: './operator-base.component.html',
    styleUrls: ['./operator-base.component.scss'],
})
export class OperatorBaseComponent implements OnInit, OnDestroy {
    contact = CONTACT;
    laborActivity = LABOR_ACTIVITY;

    private scrollEventSubscribe: Subscription;
    private shrinkHeader$: Observable<boolean>;

    constructor(private headerService: HeaderService) {}

    ngOnInit(): void {
        this.scrollEventSubscribe = fromEvent(window, 'scroll')
            .pipe(throttleTime(200))
            .subscribe(() => {
                if (window.pageYOffset > 220) {
                    this.headerService.setShrinkHeader(true);
                } else {
                    this.headerService.setShrinkHeader(false);
                }
                this.shrinkHeader$ = this.headerService.getShrinkHeader();
            });
    }

    ngOnDestroy(): void {
        this.scrollEventSubscribe.unsubscribe();
    }
}
