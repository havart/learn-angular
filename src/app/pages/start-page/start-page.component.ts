import { Component } from '@angular/core';
import { getRandomIdHelper } from '../../helpers/get-random-id.helper';
import { ClientInterface } from '../../interfaces/client.interface';
import { Router } from '@angular/router';
import { RoutingPathEnum } from '../../app-routing-enum';
import { ClientService } from 'src/app/services/client.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorSnackBarService } from 'src/app/services/error-snack-bar.service';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent {
    constructor(
        private readonly clientService: ClientService,
        private readonly router: Router,
        private readonly errorSnackBarService: ErrorSnackBarService,
    ) {}

    getTask(): void {
        const id = getRandomIdHelper(1, 10);
        this.clientService.client$(id).subscribe(
            (_client: ClientInterface) => {
                if (_client) {
                    this.router.navigate([RoutingPathEnum.MAIN, `${id}`]);
                }
            },
            (_error: HttpErrorResponse) => {
                this.errorSnackBarService.openSnackBarError(_error.message);
                this.router.navigate([RoutingPathEnum.START]);
            },
        );
    }
}
