import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CONTACT, LABOR_ACTIVITY } from '../../../constants/path.constans';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import { HeaderService } from '../../../services/header.service';

@Component({
    selector: 'app-operator-base',
    templateUrl: './operator-base.component.html',
    styleUrls: ['./operator-base.component.scss'],
})
export class OperatorBaseComponent implements OnInit {
    contact = CONTACT;
    laborActivity = LABOR_ACTIVITY;

    private shrinkHeader$: Observable<boolean>;

    constructor(private headerService: HeaderService) {}

    ngOnInit(): void {
        const scroll$ = fromEvent(window, 'scroll')
            .pipe(throttleTime(10))
            .subscribe(() => {
                if (window.pageYOffset > 220) {
                    this.headerService.setShrinkHeader(true);
                } else {
                    this.headerService.setShrinkHeader(false);
                }
                this.shrinkHeader$ = this.headerService.getShrinkHeader();
            });
    }
}
