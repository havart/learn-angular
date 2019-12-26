import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ClientActivityInterface } from '../../interfaces/client-activity.interface';
import { ClientInterface } from '../../interfaces/client.interface';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../../services/activity.service';
import { ClientService } from '../../services/client.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientComponent implements OnInit {
    public time = Date.now();
    public client$: Observable<ClientInterface>;
    public clientDetail$: Observable<ClientActivityInterface>;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly clientService: ClientService,
        private readonly activityService: ActivityService,
    ) {}

    ngOnInit(): void {
        this.client$ = this.route.paramMap.pipe(switchMap(params => this.clientService.client$(params.get('id'))));
        this.clientDetail$ = this.route.paramMap.pipe(
            switchMap(params => this.activityService.fetchClientActivity$(params.get('id'))),
        );
    }
}
