import { Component, OnDestroy, OnInit } from '@angular/core';
import { CONTACT, LABOR_ACTIVITY } from '../../../constants/path.constans';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { HeaderService } from '../../../services/header.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-operator-base',
    templateUrl: './operator-base.component.html',
    styleUrls: ['./operator-base.component.scss'],
    animations: [
        trigger('headerAnimationTrigger', [
            transition('void => *', [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))]),
            transition('* => void', [animate('0.5s', style({ opacity: 0 }))]),
        ]),
    ],
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
