import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ClientLaborActivityInterface } from 'src/app/interfaces/client-labor-activity.interface';

@Component({
    selector: 'app-info-labor-activity-client',
    templateUrl: './info-labor-activity-client.component.html',
    styleUrls: ['./info-labor-activity-client.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoLaborActivityClientComponent {
    @Input() public clientLaborActivity: ClientLaborActivityInterface;
}
