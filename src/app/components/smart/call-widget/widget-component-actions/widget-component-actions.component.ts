import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CallWidgetService } from '../../../../services/call-widget.service';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-widget-component-actions',
    templateUrl: './widget-component-actions.component.html',
    styleUrls: ['./widget-component-actions.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponentActionsComponent implements OnInit {
    @Input() sourceTimer: number;
    callStatus: boolean;
    microStatus: boolean;

    constructor(private callWidgetService: CallWidgetService) {}

    ngOnInit(): void {
        this.callWidgetService.callStatus$.subscribe((value: boolean) => {
            this.callStatus = value;
        });
    }

    toggleMicrophone(): void {
        this.microStatus = !this.microStatus;
    }

    callToggle(): void {
        this.callStatus = !this.callStatus;
        this.callWidgetService.setCallStatus(this.callStatus);
    }
}
