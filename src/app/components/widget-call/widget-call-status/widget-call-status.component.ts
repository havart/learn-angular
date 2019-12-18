import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-widget-call-status',
    templateUrl: './widget-call-status.component.html',
    styleUrls: ['./widget-call-status.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetCallStatusComponent {}
