import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { ClientInterface } from 'src/app/interfaces/client.interface';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
    public time = Date.now();
    public user: ClientInterface;
    constructor(private readonly connectionService: ConnectionService) {}

    ngOnInit(): void {
        this.connectionService.client$.subscribe((currentClient: ClientInterface) => {
            this.user = currentClient;
        });
    }
}
