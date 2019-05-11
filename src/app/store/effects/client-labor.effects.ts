import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ClientInfoService } from 'src/app/services/clientInfoService/client-info.service';
import { LaborActions, GetLabor, GetLaborError } from '../actions/client-labor.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ClientLaborEffects {

    @Effect()
    clientLabor$ = this.actions$.pipe(
        ofType(LaborActions.LoadLabor),
        mergeMap(
            () => this.laborService.getLaborById$()
            .pipe(
                map(labor => new GetLabor({ clientLabor: labor })
                )),
            //  tap(() => console.log('this = tap')),
            //     catchError(() => of(new GetLaborError())),
        ),
    );

    constructor(private actions$: Actions, private laborService: ClientInfoService) {}
}
