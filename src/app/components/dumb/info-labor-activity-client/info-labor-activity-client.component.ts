import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientLaborActivityInterface } from 'src/app/interfaces/client-labor-activity.interface';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MainState } from 'src/app/store/state/main.state';
import { selectLaborActivity } from 'src/app/store/selectors/labor-activity.selector';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-info-labor-activity-client',
    templateUrl: './info-labor-activity-client.component.html',
    styleUrls: ['./info-labor-activity-client.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoLaborActivityClientComponent implements OnInit {
    clientLaborActivity$: Observable<ClientLaborActivityInterface>;

    constructor(private store$: Store<MainState>) {}

    ngOnInit(): void {
        this.clientLaborActivity$ = this.store$.pipe(select(selectLaborActivity));
    }
}
