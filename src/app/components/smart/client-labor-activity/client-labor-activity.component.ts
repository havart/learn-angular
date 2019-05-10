import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientInfoService } from 'src/app/services/clientInfoService/client-info.service';
import { Observable } from 'rxjs';
import { ILabor } from 'src/app/interfaces/labor.interface';

@Component({
    selector: 'app-client-labor-activity',
    templateUrl: './client-labor-activity.component.html',
    styleUrls: ['./client-labor-activity.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientLaborActivityComponent implements OnInit {
    client$: Observable <ILabor>;

    constructor(private clientInfoService: ClientInfoService) {}
    ngOnInit() {
        this.client$ = this.clientInfoService.getLaborById$();
       // this.client$ = this.clientInfoService.labor$;
    }
}
