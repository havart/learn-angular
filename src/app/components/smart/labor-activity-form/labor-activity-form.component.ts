import { Component, OnInit, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { ILabor } from 'src/app/interfaces/labor.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmploymentsConfig } from 'src/app/config/employment.config';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { IAppState } from 'src/app/store/app.state';
import { LaborService } from '../../../services/labor/labor.service';
import { IClient } from '../../../interfaces/client.interface';
import { selectGetClient } from '../../../store/client/client.selector';
import { Observable } from 'rxjs';
import { ClientInfoService } from '../../../services/clientInfoService/client-info.service';
import { SelectedLaborSet } from '../../../store/client-labor/client-labor.action';
import { SelectedClientSet } from '../../../store/client/client.action';

@Component({
    selector: 'app-labor-activity-form',
    templateUrl: './labor-activity-form.component.html',
    styleUrls: ['./labor-activity-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaborActivityFormComponent implements OnInit, DoCheck {
    labor$: Observable<ILabor>;
    form: FormGroup = new FormGroup({});
    employments: ReadonlyArray<string>;
    buttonVisibility = true;
    tempForm: ILabor;
    activeCall = false;

    constructor(
        private laborService: LaborService,
        private clientInfoService: ClientInfoService,
        private store$: Store<IAppState>,
        private formBuilder: FormBuilder,
        private config: EmploymentsConfig,
    ) {}

    ngOnInit() {
        this.employments = this.config.EMPLOYMENTLIST;

        this.labor$ = this.fillForm();

        this.initForm();
    }
    ngDoCheck() {
        this.buttonVisibility = _.isEqual(this.form.value, this.tempForm);
    }

    getNext(): void {
        const clientId = '' + Math.floor(Math.random() * 10 + 1);
        this.store$.dispatch(new SelectedClientSet(clientId));
        this.store$.dispatch(new SelectedLaborSet(clientId));
        this.clientInfoService.getClientById$(clientId).subscribe();
        this.fillForm();
    }

    private fillForm(): Observable<ILabor> {
        return this.store$.select(selectGetClient).pipe(
            filter((client: IClient) => !!client),
            switchMap(({ id }: IClient) =>
                this.laborService.getLaborById$(id).pipe(
                    filter((labor: ILabor) => !!labor),
                    map((labor: ILabor) => {
                        return {
                            ...labor,
                            startDate: new Date(labor.startDate).toString(),
                        };
                    }),
                    tap((labor: ILabor) => {
                        this.form.patchValue({ ...labor });
                        this.tempForm = labor;
                    }),
                ),
            ),
        );
    }
    private initForm(): void {
        this.form = this.formBuilder.group({
            employment: [null],
            occupation: [null],
            position: [null],
            organizationAddress: [null],
            address: [null],
            createdAt: [null],
            type: [null],
            income: [null],
            workPhone: [null],
            startDate: [null],
            site: [null],
            id: [null],
        });
    }

    saveLaborChanges(): void {
        this.laborService.updateLabor$(this.form.value, this.form.value.id).subscribe();
    }

    cancelLaborChanges(): void {
        this.form.patchValue({ ...this.tempForm });
    }

    addNewLabor(): void {
        this.laborService.addLabor$(this.form.value);
    }

    callToClient(): void {
        this.activeCall = !this.activeCall;
        console.log(`Звонок на номер ${this.form.value.workPhone}`);
    }

    callEnd(): void {
        this.activeCall = !this.activeCall;
    }
}
