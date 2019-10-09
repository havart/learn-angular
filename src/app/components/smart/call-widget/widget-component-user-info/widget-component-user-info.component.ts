import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-component-user-info',
  templateUrl: './widget-component-user-info.component.html',
  styleUrls: ['./widget-component-user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponentUserInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
