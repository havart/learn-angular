import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator-main-tabs',
  templateUrl: './operator-main-tabs.component.html',
  styleUrls: ['./operator-main-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperatorMainTabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
