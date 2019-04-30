import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ClientInfoService } from '../../../services/clientInfoService/client-info.service';
import { ClientInterface } from '../../../interfaces/client.interface';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientComponent implements OnInit {
    client$: Observable<ClientInterface>;
    id: string;

    constructor(private clientInfoService: ClientInfoService) {}

    ngOnInit() {
        this.id = '2';
        this.client$ = this.clientInfoService.getById(this.id);
    }
}
