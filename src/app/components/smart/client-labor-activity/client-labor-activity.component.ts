import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientInfoService } from 'src/app/services/clientInfoService/client-info.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ILabor } from 'src/app/interfaces/labor.interface';
import { tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { getLabor } from 'src/app/store/selectors/client-labor.selector';
import { UpsertLabor, SelectedLaborSet } from 'src/app/store/actions/client-labor.action';

@Component({
    selector: 'app-client-labor-activity',
    templateUrl: './client-labor-activity.component.html',
    styleUrls: ['./client-labor-activity.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientLaborActivityComponent implements OnInit {
    client$: Observable<ILabor>;

    constructor(private clientInfoService: ClientInfoService, private store$: Store<IAppState>) {
        this.client$ = this.store$.pipe(select(getLabor));
    }

    ngOnInit() {
        this.clientInfoService
            .getLaborById$(1)
            .pipe(
                tap((el: ILabor) => {
                    this.store$.dispatch(new UpsertLabor(el));
                    this.store$.dispatch(new SelectedLaborSet(el.id));
                }),
            )
            .subscribe();
        // this.client$ = this.clientInfoService.getLaborById$(1);
    }
}
