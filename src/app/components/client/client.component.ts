import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientInterface } from '../../interfaces/client.interface';
import { ActivatedRoute } from '@angular/router';
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

    constructor(private readonly route: ActivatedRoute, private readonly clientService: ClientService) {}

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;

        this.client$ = this.clientService.client$(id);
    }
}
