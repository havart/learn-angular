import { Component } from '@angular/core';
import { getRandomIdHelper } from '../../helpers/get-random-id.helper';
import { ClientInterface } from '../../interfaces/client.interface';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RoutingPathEnum } from '../../app-routing-enum';
import { ClientService } from '../../services/client.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MainPageRoutingEnum } from '../main-page/main-page-routing.enum';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent {
    constructor(private readonly clientService: ClientService, private readonly router: Router) {}

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
