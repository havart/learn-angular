import { Component } from '@angular/core';
import { getClientAge } from '../../helpers/get-client-age.helper';
import { ConnectionService } from 'src/app/services/connection.service';
import { ClientInterface } from 'src/app/interfaces/client.interface';

@Component({
    selector: 'app-client-detail',
    templateUrl: './client-detail.component.html',
    styleUrls: ['./client-detail.component.scss'],
})
export class ClientDetailComponent {
    public time = Date.now();
    public user: ClientInterface;
    constructor(private connectionService: ConnectionService) {}

    ngOnInit(): void {
        this.connectionService.currentСlient.subscribe(
            (currentClient: ClientInterface) => {
            this.user = currentClient;
            console.log(this.user)
            });
    }
}