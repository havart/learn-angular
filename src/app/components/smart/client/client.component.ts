import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ClientInfoService } from '../../../services/clientInfoService/client-info.service';
import { IClient } from '../../../interfaces/client.interface';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../../store/app.state';
import { selectGetClient } from '../../../store/client/client.selector';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientComponent implements OnInit {
    client$: Observable<IClient>;
    clientId: string;

    constructor(private clientInfoService: ClientInfoService, private store$: Store<IAppState>) {}

    ngOnInit() {
        this.client$ = this.store$.pipe(select(selectGetClient));
        this.clientId = '' + Math.floor(Math.random() * 10 + 1);
        this.clientInfoService.getClientById$(this.clientId).subscribe();
    }
}
