import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { OPERATOR } from 'src/app/constants/path.constans';
import { HttpErrorResponse } from '@angular/common/http';
import { ClientInterface } from 'src/app/interfaces/client.interface';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
    constructor(private serverConnectionService: ClientService, private router: Router) {}

    ngOnInit() {}

    getRandomId(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    sendRequest() {
        const id = this.getRandomId(1, 10);
        this.serverConnectionService.getTask$(id).subscribe(
            (client: ClientInterface) => {
                this.router.navigate([OPERATOR]);
                this.serverConnectionService.setClient(client);
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            },
        );
    }
}
