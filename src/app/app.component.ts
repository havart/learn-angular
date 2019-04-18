import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'learn-angular-change-detaction';
    @ViewChild('text') input: ElementRef;
    items: string[] = ['one', 'two', 'three'];

    addItem(item) {
        if (!!item) {
            this.items.push(item);
        }
        this.input.nativeElement.value = '';
    }
    del(val) {
        const index = this.items.indexOf(val);
        this.items.splice(index, 1);
    }
}
