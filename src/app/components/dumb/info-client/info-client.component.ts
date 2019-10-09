import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ClientInterface } from '../../../interfaces/client.interface';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectClient } from 'src/app/store/selectors/client.selector';
import { MainState } from 'src/app/store/state/main.state';
import { selectLaborActivity } from 'src/app/store/selectors/labor-activity.selector';
import { ClientLaborActivityInterface } from 'src/app/interfaces/client-labor-activity.interface';
import { ModificationStateInfoClientService } from 'src/app/services/modification-state-info-client.service';

@Component({
    selector: 'app-info-client',
    templateUrl: './info-client.component.html',
    styleUrls: ['./info-client.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoClientComponent implements OnInit, OnDestroy {
    client: ClientInterface;
    clientLaborActivity: ClientLaborActivityInterface;
    isSticky: boolean;
    private client$: Subscription;
    private clientLaborActivity$: Subscription;
    private isSticky$: Subscription;

    constructor(
        private store$: Store<MainState>,
        private modificationStateInfoClientService: ModificationStateInfoClientService,
        private changeDetectorRef: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        this.client$ = this.store$.pipe(select(selectClient)).subscribe((client: ClientInterface) => {
            this.client = client;
            this.changeDetectorRef.detectChanges();
        });
        this.clientLaborActivity$ = this.store$
            .pipe(select(selectLaborActivity))
            .subscribe((clientLaborActivity: ClientLaborActivityInterface) => {
                this.clientLaborActivity = clientLaborActivity;
                this.changeDetectorRef.detectChanges();
            });
        this.isSticky$ = this.modificationStateInfoClientService
            .changeStateScrollInit$()
            .subscribe((isSticky: boolean) => {
                this.isSticky = isSticky;
                this.changeDetectorRef.detectChanges();
            });
    }

    ngOnDestroy(): void {
        this.client$.unsubscribe();
        this.clientLaborActivity$.unsubscribe();
        this.isSticky$.unsubscribe();
    }
}
