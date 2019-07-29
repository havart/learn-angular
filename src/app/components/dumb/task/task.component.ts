import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Router } from '@angular/router';
import { OPERATOR } from 'src/app/constants/path.constans';
import { MathHelper } from 'src/app/helpers/math.helper';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
    constructor(
        private serverConnectionService: ClientService,
        private router: Router,
        private mathHelper: MathHelper,
    ) {}

    sendRequest(): void {
        const id = this.mathHelper.getRandomNumber(1, 10);
        this.serverConnectionService.getTask$(id).subscribe(() => {
            this.router.navigate([OPERATOR]);
        });
    }
}
