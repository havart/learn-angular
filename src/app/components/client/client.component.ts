import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientInterface } from 'src/app/interfaces/client.interface';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { RequestService } from 'src/app/services/request.service';
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

    constructor(
        private readonly route: ActivatedRoute,
        private readonly clientService: ClientService,
        private readonly requestService: RequestService,
    ) {}

    ngOnInit(): void {
        const isDataLoading = this.requestService._isDataLoading$.getValue();
        const id = this.route.snapshot.params.id;

        if (isDataLoading) {
            return;
        }

        this.client$ = this.clientService.client$(id);
    }
}
