import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientInterface } from '../../../interfaces/client.interface';
import { select, Store } from '@ngrx/store';
import { MainState } from '../../../store/state/main.state';
import { selectClient } from '../../../store/selectors/client.selector';
import { VisibilityState } from './info-client-fixed.enum';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ClientLaborActivityInterface } from '../../../interfaces/client-labor-activity.interface';
import { selectLaborActivity } from '../../../store/selectors/labor-activity.selector';
import { HeaderService } from '../../../services/header.service';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
    selector: 'app-info-client-fixed',
    templateUrl: './info-client-fixed.component.html',
    styleUrls: ['./info-client-fixed.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoClientFixedComponent implements OnInit {
    client$: Observable<ClientInterface>;
    clientLaborActivity$: Observable<ClientLaborActivityInterface>;

    constructor(private store$: Store<MainState>, private headerService: HeaderService) {}

    ngOnInit(): void {
        this.client$ = this.store$.pipe(select(selectClient));
        this.clientLaborActivity$ = this.store$.pipe(select(selectLaborActivity));
    }
}
