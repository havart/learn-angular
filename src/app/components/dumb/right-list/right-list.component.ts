import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-right-list',
    templateUrl: './right-list.component.html',
    styleUrls: ['./right-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightListComponent {}
