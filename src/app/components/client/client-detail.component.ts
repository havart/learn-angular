import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { ClientInterface } from 'src/app/interfaces/client.interface';

@Component({
    selector: 'app-client-detail',
    templateUrl: './client-detail.component.html',
    styleUrls: ['./client-detail.component.scss'],
})
export class ClientDetailComponent implements OnInit {
    public time = Date.now();
    public user: ClientInterface;
    constructor(private readonly connectionService: ConnectionService) {}

    ngOnInit(): void {
        this.connectionService.getClient$().subscribe((currentClient: ClientInterface) => {
            this.user = currentClient;
        });
    }
}
