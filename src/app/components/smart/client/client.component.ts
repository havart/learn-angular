import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ClientInfoService } from '../../../services/clientInfoService/client-info.service';
import { IClient } from '../../../interfaces/client.interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { getAge } from '../../../helpers/user-age';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientComponent implements OnInit {
    client$: Observable<IClient>;
    id: string;

    constructor(private clientInfoService: ClientInfoService) {}

    ngOnInit() {
        this.id = Math.floor(Math.random() * 10 + 1);
        this.client$ = this.clientInfoService.getById(this.id).pipe(
            tap(el => {
                return (el.age = getAge(el.age));
            }),
        );
    }
}
