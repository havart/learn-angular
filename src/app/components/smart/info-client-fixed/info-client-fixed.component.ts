import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientInterface } from '../../../interfaces/client.interface';
import { select, Store } from '@ngrx/store';
import { MainState } from '../../../store/state/main.state';
import { selectClient } from '../../../store/selectors/client.selector';
import { ClientLaborActivityInterface } from '../../../interfaces/client-labor-activity.interface';
import { selectLaborActivity } from '../../../store/selectors/labor-activity.selector';

@Component({
    selector: 'app-info-client-fixed',
    templateUrl: './info-client-fixed.component.html',
    styleUrls: ['./info-client-fixed.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoClientFixedComponent implements OnInit {
    client$: Observable<ClientInterface>;
    clientLaborActivity$: Observable<ClientLaborActivityInterface>;

    constructor(private store$: Store<MainState>) {}

    ngOnInit(): void {
        this.client$ = this.store$.pipe(select(selectClient));
        this.clientLaborActivity$ = this.store$.pipe(select(selectLaborActivity));
    }
}
