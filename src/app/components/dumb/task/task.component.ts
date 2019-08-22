import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MathHelper } from 'src/app/helpers/math.helper';
import { Store } from '@ngrx/store';
import { ClientInterface } from 'src/app/interfaces/client.interface';
import { GetClient } from 'src/app/store/actions/client.action';
import { GetLaborActivity } from 'src/app/store/actions/labor-activity.action';
import { ClientService } from 'src/app/services/client.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
    isShowButton$: Observable<boolean>;

    constructor(
        private mathHelper: MathHelper,
        private store$: Store<ClientInterface>,
        private clientService: ClientService,
    ) {}

    ngOnInit(): void {
        this.clientService.setIsShowButton(true);
        this.isShowButton$ = this.clientService.isShowButton$;
    }

    sendRequestLaborActivity(id: string): void {
        this.store$.dispatch(new GetLaborActivity(id));
    }

    sendRequest(): void {
        this.clientService.setIsShowButton(false);
        const id = this.mathHelper.getRandomNumber(1, 10).toString();
        this.store$.dispatch(new GetClient(id));
        this.sendRequestLaborActivity(id);
    }
}
