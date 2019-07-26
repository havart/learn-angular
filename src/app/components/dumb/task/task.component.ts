import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Router } from '@angular/router';
import { OPERATOR } from 'src/app/constants/path.constans';
import { HttpErrorResponse } from '@angular/common/http';
import { ClientLaborActivityService } from 'src/app/services/client-labor-activity.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
    constructor(
        private clientService: ClientService,
        private router: Router,
        private clientLaborActivityService: ClientLaborActivityService,
    ) {}

    getRandomId(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    sendRequestLaborActivity(id: number): void {
        this.clientLaborActivityService.getLaborActivityClient$(id).subscribe(
            () => {
                this.router.navigate([OPERATOR]);
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            },
        );
    }

    sendRequest(): void {
        const id = this.getRandomId(1, 10);
        this.clientService.getTask$(id).subscribe(
            () => {
                this.sendRequestLaborActivity(id);
            },
            (error: HttpErrorResponse) => {
                console.log(error, id);
            },
        );
    }
}
