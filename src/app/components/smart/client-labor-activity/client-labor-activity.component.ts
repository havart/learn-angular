import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientInfoService } from 'src/app/services/clientInfoService/client-info.service';
import { Observable } from 'rxjs';
import { ILabor } from 'src/app/interfaces/labor.interface';
import { switchMap } from 'rxjs/operators';
import { IClient } from '../../../interfaces/client.interface';
import {LaborService} from '../../../services/labor/labor.service';

@Component({
    selector: 'app-client-labor-activity',
    templateUrl: './client-labor-activity.component.html',
    styleUrls: ['./client-labor-activity.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientLaborActivityComponent implements OnInit {
    client$: Observable<IClient>;
    labor$: Observable<ILabor>;

    constructor(private clientInfoService: ClientInfoService, private laborService: LaborService) {}

    ngOnInit() {
        this.client$ = this.clientInfoService.getClientById$('1');
        this.labor$ = this.client$.pipe(
            switchMap(({ id }: IClient) => {
                return this.laborService.getLaborById$(+id);
            }),
        );
    }
}
