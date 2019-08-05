import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { OPERATOR } from 'src/app/constants/path.constans';
import { MathHelper } from 'src/app/helpers/math.helper';
import { HttpErrorResponse } from '@angular/common/http';
import { ClientLaborActivityService } from 'src/app/services/client-labor-activity.service';
import { Store } from '@ngrx/store';
import { ClientInterface } from 'src/app/interfaces/client.interface';
import { GetClient } from 'src/app/store/actions/client.action';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
    constructor(
        private router: Router,
        private clientLaborActivityService: ClientLaborActivityService,
        private mathHelper: MathHelper,
        private store: Store<ClientInterface>,
    ) {}

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
        const id = this.mathHelper.getRandomNumber(1, 10);
        this.store.dispatch(new GetClient(id));
        this.sendRequestLaborActivity(id);
    }
}
