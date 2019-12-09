import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientInterface } from '../../interfaces/client.interface';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Observable } from 'rxjs';
// import { tap, map, take, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientComponent implements OnInit {
    public time = Date.now();
    public client$: Observable<ClientInterface>;
    public id: string;

    constructor(private readonly route: ActivatedRoute, private readonly clientService: ClientService) {}

    ngOnInit(): void {
        // this.client$ = this.route.params.pipe(
        //     tap(({ id }) => console.log(id)),
        //     switchMap(({ id }) => this.clientService.client$(id)),
        //     take(1),
        //     tap(val => console.log(val)),
        // );

        const id = this.route.snapshot.params.id;
        this.client$ = this.clientService.client$(id);
    }
}
