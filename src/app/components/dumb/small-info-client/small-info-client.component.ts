import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ClientInterface } from 'src/app/interfaces/client.interface';
import { ClientLaborActivityInterface } from 'src/app/interfaces/client-labor-activity.interface';

@Component({
    selector: 'app-small-info-client',
    templateUrl: './small-info-client.component.html',
    styleUrls: ['./small-info-client.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallInfoClientComponent {
    @Input() public client: ClientInterface;
    @Input() public clientLaborActivity: ClientLaborActivityInterface;
}
