import { Observable, forkJoin } from 'rxjs';
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
import { StepsUpsertAction } from '../+store/steps/steps.actions';
import { GetStepService } from './get-step.service';
import { CommentsUpsertAction } from '../+store/comments/comments.actions';

@Injectable({
    providedIn: 'root',
})
export class ClientService extends AbstractLoading {
    constructor(
        private readonly http: HttpClient,
        private readonly store$: Store<GlobalState>,
        private readonly errorSnackBarService: ErrorSnackBarService,
        private readonly getCommentService: GetCommentService,
        private readonly getStepsService: GetStepService,
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
                concatMap(client => {
                    this.setClient(client);

                    return this.getCommentsAndSteps$();
                }),
            )
            .subscribe(
                result => {
                    this.store$.dispatch(new CommentsUpsertAction({ clientId: `${id}`, comments: result[0] }));
                    this.store$.dispatch(new StepsUpsertAction({ clientId: `${id}`, steps: result[1] }));
                },
                (error: HttpErrorResponse) => {
                    this.errorSnackBarService.openSnackBarError(error.status);
                },
            );
    }
    private getCommentsAndSteps$(): Observable<any> {
        return forkJoin(this.getCommentService.getComment$(), this.getStepsService.getStep$());
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
