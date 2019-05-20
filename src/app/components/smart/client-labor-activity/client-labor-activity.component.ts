import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientInfoService } from 'src/app/services/clientInfoService/client-info.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ILabor } from 'src/app/interfaces/labor.interface';

@Component({
    selector: 'app-client-labor-activity',
    templateUrl: './client-labor-activity.component.html',
    styleUrls: ['./client-labor-activity.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientLaborActivityComponent implements OnInit {
    private _client$: BehaviorSubject<ILabor>;
    private client: ILabor;
    client$: Observable<ILabor>;

    constructor(private clientInfoService: ClientInfoService) {}

    ngOnInit() {
        this.client$ = this.clientInfoService.labor$;
        this.clientInfoService.getLaborById$();
    }
}
