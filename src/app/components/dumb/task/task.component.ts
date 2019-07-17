import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ServerConnectionService } from '../../../services/server-connection.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MathHelper } from '../../../helpers/math.helper';
import { OPERATOR } from '../../../constants/path.constans';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
    constructor(private serverConnectionService: ServerConnectionService, private router: Router, private mathHelper: MathHelper) {}

    ngOnInit() {}

    getTask() {
        const id = this.mathHelper.getRandomNumber(1, 20);
        const url = `http://5bfff0a00296210013dc7e82.mockapi.io/test/user-info/${id}`;
        this.serverConnectionService.getRequest$(url).subscribe(
            response => {
                console.log(response);
                this.router.navigate([OPERATOR]);
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            },
        );
    }
}
