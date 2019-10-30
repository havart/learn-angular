import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { GetTaskService } from '../../services/get-task.service';
import { getRandomIdHelper } from '../../helpers/get-random-id.helper';
import { ClientInterface } from '../../interfaces/client.interface';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent {
    constructor(private readonly getTaskService: GetTaskService) {}

    getTask(): void  {
        const id = getRandomIdHelper(1, 20);

        this.getTaskService.getClient$(id).subscribe(
            (_client: ClientInterface) => {
            },
            (_error: HttpErrorResponse) => {
            },
        );
    }
}
