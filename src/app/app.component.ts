import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'learn-angular-change-detaction';

    items: string[] = ['one', 'two', 'three'];

    addItem(item, ev) {
        if (item) {
            this.items.push(item);
        }
        console.log(ev)
    }
    del(val) {
        const index = this.items.indexOf(val);
        this.items.splice(index, 1);
        console.log(val + ' is delete');
    }
}
