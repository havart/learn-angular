import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { GetTaskService } from '../../services/get-task.service';
import { getRandomIdHelper } from '../../helpers/get-random-id.helper';
import { ClientInterface } from '../../interfaces/client.interface';
import { Router } from '@angular/router';
import { RoutingPathEnum } from '../../app-routing-enum';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent {
    constructor(private readonly getTaskService: GetTaskService, private readonly router: Router) {}

    getTask(): void {
        const id = getRandomIdHelper(1, 20);

        this.getTaskService.getClient$(id).subscribe(
            (client: ClientInterface) => client,

            (error: HttpErrorResponse) => error,
        );

        this.router.navigate([RoutingPathEnum.MAIN]);
    }
}
