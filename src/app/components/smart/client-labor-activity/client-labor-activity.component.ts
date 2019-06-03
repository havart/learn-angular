import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientInfoService } from 'src/app/services/clientInfoService/client-info.service';
import { Observable } from 'rxjs';
import { ILabor } from 'src/app/interfaces/labor.interface';
import { switchMap } from 'rxjs/operators';
import { IClient } from '../../../interfaces/client.interface';
import { LaborService } from '../../../services/labor/labor.service';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { selectGetLabor } from '../../../store/selectors/client-labor.selector';

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
    ) {
        this.labor$ = this.store$.pipe(select(selectGetLabor));
    }

    ngOnInit() {
        this.clientInfoService.getClientById$('1').pipe(
            switchMap(({ id }: IClient) => {
                return this.laborService.getLaborById$(+id);
            }),
        );
    }
}
