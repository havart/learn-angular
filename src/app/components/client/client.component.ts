import { Component, OnInit } from '@angular/core';
import { ClientInterface } from 'src/app/interfaces/client.interface';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
    public time = Date.now();
    public user: ClientInterface;

    constructor(private readonly route: ActivatedRoute, private readonly clientService: ClientService) {}

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;
        this.clientService.client$(id).subscribe((currentClient: ClientInterface) => {
            this.user = currentClient;
        });

        this.clientService._clientId$.getValue();
    }
}
