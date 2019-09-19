import { Component, OnInit } from '@angular/core';
import { CallWidgetService } from '../../../services/call-widget.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-call-widget',
    templateUrl: './call-widget.component.html',
    styleUrls: ['./call-widget.component.scss'],
})
export class CallWidgetComponent implements OnInit {
    spinnerDiameter = 25;
    phoneNumber$: Observable<string>;
    userName$: Observable<string>;

    constructor(private callWidgetService: CallWidgetService) {}

    ngOnInit(): void {
        this.phoneNumber$ = this.callWidgetService.getPhoneNumber$();
        this.userName$ = this.callWidgetService.getUserName$();
    }
}
