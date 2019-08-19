import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MathHelper } from 'src/app/helpers/math.helper';
import { Store } from '@ngrx/store';
import { ClientInterface } from 'src/app/interfaces/client.interface';
import { GetClient } from 'src/app/store/actions/client.action';
import { GetLaborActivity } from 'src/app/store/actions/labor-activity.action';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
    constructor(private mathHelper: MathHelper, private store: Store<ClientInterface>) {}

    sendRequestLaborActivity(id: number): void {
        this.store.dispatch(new GetLaborActivity(id));
    }

    sendRequest(): void {
        const id = this.mathHelper.getRandomNumber(1, 10);
        this.store.dispatch(new GetClient(id));
        this.sendRequestLaborActivity(id);
    }
}
