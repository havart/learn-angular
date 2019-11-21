import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ClientService } from '../services/client.service';
import { ClientActionTypes, GetClient, GetClientSucces } from '../actions/client.actions';
import { map, exhaustMap } from 'rxjs/operators';

@Injectable()
export class ClientEffects {
    @Effect()
    fetchClient$ = this.actions$.pipe(
        ofType<GetClient>(ClientActionTypes.GET_CLIENT),
        map(action => action.payload),
        exhaustMap(query => {
            return this.clientService.client$(query).pipe(
                map(results => {
                    return new GetClientSucces(results);
                }),
            );
        }),
    );

    constructor(private readonly actions$: Actions, private readonly clientService: ClientService) {}
}
