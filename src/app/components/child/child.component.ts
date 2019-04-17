import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() items: string[];

  constructor() {
  }

  ngOnInit() {
  }

  deleteItem(value: string) {
    const index = this.items.indexOf(value);
    this.items.splice(index, 1);
  }
}
