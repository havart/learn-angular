import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { RoutingPathEnum } from '../../app-routing-enum';
import { getRandomIdHelper } from '../../helpers/get-random-id.helper';
import { ClientInterface } from '../../interfaces/client.interface';
import { ClientService } from '../../services/client.service';
import { MainPageRoutingEnum } from '../main-page/main-page-routing.enum';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartPageComponent implements OnDestroy {
    private onDestroy$ = new Subject<boolean>();

    constructor(private readonly clientService: ClientService, private readonly router: Router) {}

    ngOnDestroy(): void {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }

    getTask(): void {
        const clientId = getRandomIdHelper(1, 20).toString();

        this.clientService
            .client$(clientId)
            .pipe(
                filter((client: ClientInterface) => !!client),
                takeUntil(this.onDestroy$),
            )
            .subscribe(({ id }: ClientInterface) => {
                this.router.navigate([RoutingPathEnum.MAIN, MainPageRoutingEnum.CLIENT, `${id}`]);
            });
    }
}
