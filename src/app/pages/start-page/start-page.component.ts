import { Component } from '@angular/core';
import { getRandomIdHelper } from '../../helpers/get-random-id.helper';
import { ClientInterface } from '../../interfaces/client.interface';
import { Router } from '@angular/router';
import { RoutingPathEnum } from '../../app-routing-enum';
import { Store, select } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { MainPageRoutingEnum } from '../main-page/main-page-routing.enum';
import { AppState } from 'src/app/app.state';
import { GetClient } from 'src/app/actions/client.actions';
import { filter } from 'rxjs/operators';
import { getClient } from 'src/app/selectors/client.selector';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent {
    constructor(private readonly store$: Store<AppState>, private readonly router: Router) {}

    getTask(): void {
        const clientId = getRandomIdHelper(1, 20);
        this.store$.dispatch(new GetClient(clientId));
        this.store$
            .pipe(select(getClient))
            .pipe(filter(Boolean))
            .subscribe(
                ({ id }: ClientInterface) => {
                    this.router.navigate([RoutingPathEnum.MAIN, MainPageRoutingEnum.CLIENT, `${id}`]);
                },
                (_error: HttpErrorResponse) => {
                    this.router.navigate([RoutingPathEnum.START]);
                },
            );
    }
}
