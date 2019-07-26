import { Component, OnInit } from '@angular/core';
import { ClientLaborActivityInterface } from 'src/app/interfaces/clientLaborActivity.interfase';
import { Observable } from 'rxjs';
import { ClientLaborActivityService } from 'src/app/services/client-labor-activity.service';

@Component({
    selector: 'app-info-labor-activity-client',
    templateUrl: './info-labor-activity-client.component.html',
    styleUrls: ['./info-labor-activity-client.component.scss'],
})
export class InfoLaborActivityClientComponent implements OnInit {
    clientLaborActivity$: Observable<ClientLaborActivityInterface>;

    constructor(private clientLaborActivityService: ClientLaborActivityService) {}

    ngOnInit() {
        this.clientLaborActivity$ = this.clientLaborActivityService.clientLaborActivity$;
    }
}
