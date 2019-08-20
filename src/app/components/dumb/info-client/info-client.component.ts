import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientInterface } from '../../../interfaces/client.interface';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectClient } from 'src/app/store/selectors/client.selector';
import { MainState } from 'src/app/store/state/main.state';

@Component({
    selector: 'app-info-client',
    templateUrl: './info-client.component.html',
    styleUrls: ['./info-client.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoClientComponent implements OnInit {
    client$: Observable<ClientInterface>;

    constructor(private store$: Store<MainState>) {}

    ngOnInit(): void {
        this.client$ = this.store$.pipe(select(selectClient));
    }
}
