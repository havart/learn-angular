import { Observable } from 'rxjs';
import { ClientInterface } from '../interfaces/client.interface';
import { Injectable } from '@angular/core';
import { urlGetUser } from '../configs/url-get.const';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AbstractLoading } from '../abstract/abstract-loading';
import { finalize, tap, concatMap } from 'rxjs/operators';
import { ErrorSnackBarService } from './error-snack-bar.service';
import { Store, select } from '@ngrx/store';
import { ClientUpsertAction } from '../+store/client/client.actions';
import { getClientById } from '../+store/client/client.selectors';
import { GlobalState } from '../+store/index';
import { GetCommentService } from './get-comment.service';
import { StepInterface } from '../interfaces/step.interface';
import { StepsUpsertAction } from '../+store/steps/steps.actions';

@Injectable({
    providedIn: 'root',
})
export class ClientService extends AbstractLoading {
    constructor(
        private readonly http: HttpClient,
        private readonly store$: Store<GlobalState>,
        private readonly errorSnackBarService: ErrorSnackBarService,
        private readonly getCommentService: GetCommentService,
    ) {
        super();
    }

    public setClient(client: ClientInterface): void {
        this.store$.dispatch(new ClientUpsertAction(client));
    }

    public client$(id: number): Observable<ClientInterface> {
        return this.store$.pipe(
            select(getClientById(`${id}`)),
            tap((client: ClientInterface) => {
                if (client === undefined && !this.isLoading) {
                    this.checkDataLoadingandFetch$(id);
                }
            }),
        );
    }

    private checkDataLoadingandFetch$(id: number): void {
        this.fetchClient$(id)
            .pipe(
                concatMap(clientF => {
                    if (clientF) {
                        this.setClient(clientF);

                        return this.getCommentService.getComment$();
                    }
                }),
            )
            .subscribe(
                (comments: StepInterface[]) => {
                    console.log(comments);
                    this.store$.dispatch(new StepsUpsertAction({ clientId: id.toString(), steps: comments }));
                },
                (error: HttpErrorResponse) => {
                    this.errorSnackBarService.openSnackBarError(error.status);
                },
            );
    }
    private fetchClient$(id: number): Observable<ClientInterface> {
        this.setLoadingStatus(true);

        return this.http.get<ClientInterface>(`${urlGetUser}${id}`).pipe(
            finalize(() => {
                this.setLoadingStatus(false);
            }),
        );
    }
}
