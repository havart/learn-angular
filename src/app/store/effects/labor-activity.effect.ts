import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { GetLaborActivity, GetLaborActivitySuccess, LaborActivityActionsEnum } from '../actions/labor-activity.action';
import { ClientLaborActivityInterface } from 'src/app/interfaces/clientLaborActivity.interface';
import { ClientLaborActivityService } from 'src/app/services/client-labor-activity.service';

@Injectable()
export class LaborActivityEffects {
    @Effect()
    getLaborActivity$ = this.actions$.pipe(
        ofType<GetLaborActivity>(LaborActivityActionsEnum.GetLaborActivity),
        switchMap(action => {
            return this.clientLaborActivityService.getLaborActivityClient$(action.id);
        }),
        map((laborActivityHttp: ClientLaborActivityInterface) => new GetLaborActivitySuccess(laborActivityHttp)),
    );

    constructor(private clientLaborActivityService: ClientLaborActivityService, private actions$: Actions) {}
}
