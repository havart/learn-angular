import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientInterface } from '../../interfaces/client.interface';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { getClient } from 'src/app/selectors/client.selector';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientComponent implements OnInit {
    public time = Date.now();
    public client$: Observable<ClientInterface> = this.store$.pipe(select(getClient));

    constructor(private readonly store$: Store<AppState>) {}

    ngOnInit(): void {
        // const id = this.route.snapshot.params.id;
        // this.client$ = this.clientService.client$(id);
        // this.store$.pipe(select(getClient)).subscribe(data => this.);
    }
}
