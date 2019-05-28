import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientInfoService } from 'src/app/services/clientInfoService/client-info.service';
import { Observable } from 'rxjs';
import { ILabor } from 'src/app/interfaces/labor.interface';
import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { IClient } from '../../../interfaces/client.interface';

@Component({
    selector: 'app-client-labor-activity',
    templateUrl: './client-labor-activity.component.html',
    styleUrls: ['./client-labor-activity.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientLaborActivityComponent implements OnInit {
    client$: Observable<IClient>;
    labor$: Observable<ILabor>;

    constructor(private clientInfoService: ClientInfoService, private store$: Store<IAppState>) {}

    ngOnInit() {
        this.client$ = this.clientInfoService.getById$('1');
        this.labor$ = this.client$.pipe(
            switchMap(({ id }: IClient) => {
                return this.clientInfoService.getLaborById$(+id);
            }),
        );
    }
}
