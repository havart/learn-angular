import { Component } from '@angular/core';
import { getRandomIdHelper } from '../../helpers/get-random-id.helper';
import { ClientInterface } from '../../interfaces/client.interface';
import { Router } from '@angular/router';
import { RoutingPathEnum } from '../../app-routing-enum';
import { Store, select } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { MainPageRoutingEnum } from '../main-page/main-page-routing.enum';
import { AppState } from 'src/app/app.state';
import { getClientAction } from 'src/app/actions/client.actions';
import { filter } from 'rxjs/operators';
import { getClient } from 'src/app/selectors/client.selector';
import { ClientService } from 'src/app/services/client.service';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent {
    constructor(private readonly router: Router, private readonly clientService: ClientService) {}

    getTask(): void {
        const clientId = getRandomIdHelper(1, 20);
        this.clientService
            .client$(clientId)
            .pipe(filter((client: ClientInterface) => !!client))
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
