import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { GetTaskService } from '../../services/get-task.service';
import { getRandomIdHelper } from '../../helpers/get-random-id.helper';
import { ClientInterface } from '../../interfaces/client.interface';
import { Router } from '@angular/router';
import { RoutingPathEnum } from '../../app-routing-enum';
import { ConnectionService } from 'src/app/services/connection.service';

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
    ) {}

    getTask(): void {
        const id = getRandomIdHelper(1, 10);

        this.getTaskService.getClient$(id).subscribe(
            (_client: ClientInterface) => {
                this.connectionService.setClient(_client);
            },
            (_error: HttpErrorResponse) => {},
        );

        this.router.navigate([RoutingPathEnum.MAIN]);
    }
}
