import { Injectable } from '@angular/core';
import { ILabor } from '../../interfaces/labor.interface';
import { IsLoadingLabor, SelectedLaborSet, UpsertLabor, AddLabor } from '../../store/client-labor/client-labor.action';
import { selectGetLabor, selectLoadingStatus } from '../../store/client-labor/client-labor.selector';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { filter, switchMap, take, tap, map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { onceRunOrCatch } from '../../helpers/onceRunOrCatch';
import { IAppState } from '../../store/app.state';

@Injectable({
    providedIn: 'root',
})
export class LaborService {
    constructor(private httpClient: HttpClient, private config: API, private store$: Store<IAppState>) {}

    getLaborById$(clientId: string): Observable<ILabor> {
        const sourceLabor$: Observable<ILabor> = this.store$.select(selectGetLabor);

        sourceLabor$.pipe(onceRunOrCatch(this.fetchAndSave$(clientId))).subscribe();

        return sourceLabor$;
    }

    fetchAndSave$(laborId: string): Observable<ILabor> {
        return this.store$.pipe(
            select(selectLoadingStatus),
            take(1),
            filter((isLoading: boolean) => !isLoading),
            switchMap(() => {
                this.store$.dispatch(new IsLoadingLabor(true));
                return this.httpClient.get<ILabor>(`${this.config.LABOR_URL}/${laborId}`).pipe(
                    tap((labor: ILabor) => {
                        this.store$.dispatch(new UpsertLabor(labor));
                        this.store$.dispatch(new SelectedLaborSet(labor.id));
                        this.store$.dispatch(new IsLoadingLabor(false));
                    }),
                );
            }),
        );
    }
    addLabor$(form: ILabor): void {
         this.httpClient.post(this.config.LABOR_URL, form).pipe(
            map((labor: ILabor) => {
                this.store$.dispatch(new AddLabor(labor));
            }),
        ).subscribe();
    }

    updateLabor$(form: ILabor, id: string): Observable<void> {
        return this.httpClient.put<ILabor>(`${this.config.LABOR_URL}/${id}`, form).pipe(
            map((labor: ILabor) => {
                this.store$.dispatch(new UpsertLabor(labor));
                this.store$.dispatch(new SelectedLaborSet(labor.id));
            }),
        );
    }
}
