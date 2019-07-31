import { Component, OnInit } from '@angular/core';
import { ContactTabService } from '../../../services/contact-tab.service';
import { ContactTabInterface } from '../../../interfaces/contact-tab.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-operator-tabs',
  templateUrl: './operator-tabs.component.html',
  styleUrls: ['./operator-tabs.component.scss']
})
export class OperatorTabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
