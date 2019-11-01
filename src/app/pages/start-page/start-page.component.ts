import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { GetTaskService } from '../../services/get-task.service';
import { getRandomIdHelper } from '../../helpers/get-random-id.helper';
import { ClientInterface } from '../../interfaces/client.interface';
import { Router } from '@angular/router';
import { RoutingPathEnum } from '../../app-routing-enum';
import { ConnectionService } from 'src/app/services/connection.service';
import { ErrorSnackBarService } from '../../services/error-snack-bar.service';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent {
    constructor(
        private readonly getTaskService: GetTaskService,
        private readonly connectionService: ConnectionService,
        private readonly router: Router,
        private readonly errorSnackBarService: ErrorSnackBarService,
    ) {}

    getTask(): void {
        const id = getRandomIdHelper(1, 20);

        this.getTaskService.getClient$(id).subscribe(
            (_client: ClientInterface) => {
                this.connectionService.setClient(_client);
                this.router.navigate([RoutingPathEnum.MAIN]);
            },
            (_error: HttpErrorResponse) => {
                this.errorSnackBarService.openSnackBarError(_error.message);
                this.router.navigate([RoutingPathEnum.START]);
            },
        );
    }
}
