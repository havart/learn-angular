import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { GetTaskService } from '../../services/get-task.service';
import { getRandomIdHelper } from '../../helpers/get-random-id.helper';
import { ClientInterface } from '../../interfaces/client.interface';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent {
    constructor(private getTaskService: GetTaskService, private connectionService: ConnectionService) {}

    getTask() {
        const id = getRandomIdHelper(1, 10);
        this.getTaskService.getClient$(id).subscribe(
            (client: ClientInterface) => {
                this.connectionService.setClient(client);
            },
            (error: HttpErrorResponse) => {
                console.log(`No data found with id=${id}.`, error);
            },
        );

    }
}
