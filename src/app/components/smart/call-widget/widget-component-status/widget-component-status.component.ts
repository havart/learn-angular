import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-widget-component-status',
  templateUrl: './widget-component-status.component.html',
  styleUrls: ['./widget-component-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponentStatusComponent {
    @Input() sourceTimer: number;
    spinnerDiameter = 25;
}
