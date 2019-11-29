import { Store, select } from '@ngrx/store';
import { combineLatest, Observable, of } from 'rxjs';
import { GlobalState } from '../+store';
import { ClientIsLoadingAction, ClientUpsertAction } from '../+store/client/client.actions';
import { clientIsLoadingStatus, getClientById } from '../+store/client/client.selectors';
import { ClientInterface } from '../interfaces/client.interface';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, filter, finalize, switchMap, tap } from 'rxjs/operators';
import { ErrorSnackBarService } from './error-snack-bar.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(
    private readonly http: HttpClient,
    private readonly config: ApiService,
    private readonly store$: Store<GlobalState>,
    private readonly errorSnackBarService: ErrorSnackBarService,
  ) {}

  public setClient(client: ClientInterface): void {
    this.store$.dispatch(new ClientUpsertAction(client));
  }

  public setStatus(status?: boolean): void {
    this.store$.dispatch(new ClientIsLoadingAction(status));
  }

  public client$(id: number): Observable<ClientInterface> {
    // this.setStatus(false);

    const clientStatus$ = this.store$.pipe(
      select(clientIsLoadingStatus),
      // tap(v => console.log('select status: ', v)),
      filter((isLoading: boolean) => !isLoading),
    );

    const clientById$ = this.store$.pipe(
      select(getClientById(`${id}`)),
      // tap(v => console.log('select client: ', v)),
    );

    return combineLatest(clientById$, clientStatus$).pipe(
      switchMap(([clientById]) => {
        if (clientById) {
          // this.setStatus(false);

          return of(clientById);
        }

        return this.fetchClient$(id);
      }),
    );
  }

  private fetchClient$(id: number): Observable<ClientInterface> {
    this.setStatus(true);

    return this.http.get<ClientInterface>(`${this.config.CLIENT_URL}${id}`).pipe(
      // tap(v => console.log('get client: ', v)),
      tap((client: ClientInterface) => {
        this.setClient(client);
      }),
      catchError((error: HttpErrorResponse) => {
        this.errorSnackBarService.openSnackBarError(error.status);

        throw new Error();
      }),
      finalize(() => this.setStatus(false)),
    );
  }
}
