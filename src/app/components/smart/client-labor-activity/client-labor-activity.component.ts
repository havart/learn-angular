import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientInfoService } from 'src/app/services/clientInfoService/client-info.service';
import { Observable } from 'rxjs';
import { ILabor } from 'src/app/interfaces/labor.interface';
import { filter, switchMap } from 'rxjs/operators';
import { IClient } from '../../../interfaces/client.interface';
import { LaborService } from '../../../services/labor/labor.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store/app.state';
import { selectGetClient } from '../../../store/client/client.selector';

@Component({
    selector: 'app-client-labor-activity',
    templateUrl: './client-labor-activity.component.html',
    styleUrls: ['./client-labor-activity.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientLaborActivityComponent implements OnInit {
    labor$: Observable<ILabor>;

    constructor(
        private clientInfoService: ClientInfoService,
        private laborService: LaborService,
        private store$: Store<IAppState>,
    ) {}

    ngOnInit() {
        this.labor$ = this.store$.select(selectGetClient).pipe(
            filter((client: IClient) => !!client),
            switchMap(({ id }: IClient) =>
                this.laborService.getLaborById$(id).pipe(filter((labor: ILabor) => !!labor)),
            ),
        );
        // this.labor$ = this.store$.pipe(select(selectGetLabor));
        // this.clientInfoService
        //     .getClientById$('1')
        //     .pipe(switchMap(({ id }: IClient) => this.laborService.getLaborById$(id)));
    }
}
