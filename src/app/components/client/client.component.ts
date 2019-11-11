import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { ClientInterface } from 'src/app/interfaces/client.interface';
import { Observable } from 'rxjs/internal/Observable';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientComponent implements OnInit {
    public time = Date.now();
    public client$: Observable<ClientInterface>;
    constructor(private readonly connectionService: ConnectionService) {}

    ngOnInit(): void {
        this.client$ = this.connectionService.client$;
    }
}
