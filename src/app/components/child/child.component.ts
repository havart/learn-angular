import { Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
    @Input() items: string[];

    deleteItem(index: number) {
        this.items = this.items.filter((val, i) => i !== index);
    }
}
