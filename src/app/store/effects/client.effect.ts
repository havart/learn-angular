import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { GetClient, ClientActionsEnum, GetClientSuccess } from '../actions/client.action';
import { ClientService } from 'src/app/services/client.service';
import { ClientInterface } from 'src/app/interfaces/client.interface';
import { MathHelper } from 'src/app/helpers/math.helper';

@Injectable()
export class ClientEffects {
    @Effect()
    getUsers$ = this.actions$.pipe(
        ofType<GetClient>(ClientActionsEnum.GetClient),
        switchMap(action => {
            return this.clientService.getTask$(action.id);
        }),
        map((clientHttp: ClientInterface) => new GetClientSuccess(clientHttp)),
    );

    constructor(private clientService: ClientService, private actions$: Actions, private mathHelper: MathHelper) {}
}
