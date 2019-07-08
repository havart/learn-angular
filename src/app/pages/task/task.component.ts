import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ServerConnectionService } from '../../services/server-connection.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
    constructor(private serverConnectionService: ServerConnectionService, private router: Router) {}

    ngOnInit() {}

    getRandomId(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getTask() {
        const id = this.getRandomId(1, 20);
        this.serverConnectionService.getClient(id).subscribe(
            response => {
                console.log(response);
                this.router.navigate(['operator']);
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            },
        );
    }
}
