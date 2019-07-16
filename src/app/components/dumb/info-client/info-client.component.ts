import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientInterface } from '../../../interfaces/client.interface';
import { ClientService } from '../../../services/client.service';

@Component({
    selector: 'app-info-client',
    templateUrl: './info-client.component.html',
    styleUrls: ['./info-client.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoClientComponent implements OnInit {
    public client: ClientInterface;

    constructor(private clientService: ClientService) {}

    ngOnInit() {
        this.client = this.clientService.client;
        if (this.client) {
            this.client.age = this.client.age.slice(0, 10);
        }
        console.log(this.client);
    }
}
