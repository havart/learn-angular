import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ClientInfoService } from 'src/app/services/clientInfoService/client-info.service';
import { LaborActions, GetLabor, GetLaborError } from '../actions/client-labor.action';
import { mergeMap, map, catchError, tap, switchMap } from 'rxjs/operators';
import { ILabor } from 'src/app/interfaces/labor.interface';

@Injectable({ providedIn: 'root' })
export class ClientLaborEffects {
    constructor(private actions$: Actions, private laborService: ClientInfoService) {}
    @Effect()
    // clientLabor$ = this.actions$.pipe(
    //     ofType(LaborActions.LoadLabor),
    //     switchMap(
    //         () => {
    //             // this.laborService.labor$;
    //             this.laborService.getLaborById$();
    //         },
    //         //    tap(() => console.log())
    //         //     .pipe(
    //         //         map(labor => new GetLabor({ clientLabor: labor })
    //         //         )),
    //         //      tap(() => console.log(),
    //         //     //     catchError(() => of(new GetLaborError())),
    //     ),
    //     mergeMap((lab: ILabor) => {
    //         return {
    //             type: LaborActions.GetLabor,
    //             payload: lab,
    //         };
    //     }),
    // );
    clientLabor$ = this.actions$.pipe(
        ofType(LaborActions.LoadLabor),
        switchMap(() => {
            return this.laborService.getLaborById$().pipe(
             //   map(clientLabor => new LaborActions.GetLabor({ clientLabor: clientLabor })),
               // catchError(error => of(new movieActions.LoadMoviesFail(error))),
            );
        }),
    );
}
