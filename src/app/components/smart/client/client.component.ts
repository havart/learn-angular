import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ClientInfoService } from '../../../services/clientInfoService/client-info.service';
import { ClientInterface } from '../../../interfaces/client.interface';
import { Observable } from 'rxjs';
import { API } from '../../../services/API';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientComponent implements OnInit {
    client$: Observable<ClientInterface>;
    url: string;
    id: string;

    constructor(private clientInfoService: ClientInfoService, private config: API) {
        this.url = this.config.CLIENT_URL;
    }

    ngOnInit() {
        this.id = '2';
        this.client$ = this.clientInfoService.getById(this.url, this.id);
    }
}
