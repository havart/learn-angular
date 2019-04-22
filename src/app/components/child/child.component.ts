import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
    @Input() items: string[];
    @Output() del = new EventEmitter<number>();
    isClick(val: number) {
        this.del.emit(val);
    }

}
