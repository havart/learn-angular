import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-client-detail',
    templateUrl: './client-detail.component.html',
    styleUrls: ['./client-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientDetailComponent {}
