import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learn-angular-change-detaction';

  items: string[] = ['one', 'two', 'three'];
  @ViewChild('text') text: ElementRef;

  addItem(item) {
    if (item) {
      this.items.push(item);
      this.text.nativeElement.value = '';
    }
  }
}
