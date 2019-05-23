import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ILabor } from 'src/app/interfaces/labor.interface';
import { ClientInfoService } from 'src/app/services/clientInfoService/client-info.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { UpsertLabor, SelectedLaborSet } from 'src/app/store/actions/client-labor.action';
import { LABOR, getLabor } from 'src/app/store/selectors/client-labor.selector';
import { tap } from 'rxjs/operators';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
    selector: 'app-labor-activity-form',
    templateUrl: './labor-activity-form.component.html',
    styleUrls: ['./labor-activity-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaborActivityFormComponent implements OnInit {
    form: FormGroup = new FormGroup({});
    employments = ['Кастелян', 'Министр', 'Диктатор', 'Глава государства', 'Креативный директор', 'Директор'];
    client$: Observable<ILabor>;

    constructor(
        private clientInfoService: ClientInfoService,
        private store$: Store<IAppState>,
        private formBuilder: FormBuilder,
    ) {
        this.client$ = this.store$.pipe(select(getLabor));
    }
    ngOnInit() {
        this.clientInfoService
            .getLaborById$(1)
            .pipe(
                tap((el: ILabor) => {
                    this.store$.dispatch(new UpsertLabor(el));
                    this.store$.dispatch(new SelectedLaborSet(el.id));
                    this.form.patchValue(el);
                }),
            )
            .subscribe();
        this.initForm();
        this.fillForm();
    }

    getNext(): void {
        const clientId = Math.floor(Math.random() * 5 + 1);
        this.clientInfoService
            .getLaborById$(clientId)
            .pipe(
                tap((el: ILabor) => {
                    this.store$.dispatch(new UpsertLabor(el));
                    this.store$.dispatch(new SelectedLaborSet(el.id));
                    this.form.patchValue(el);
                }),
            )
            .subscribe();
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

    private fillForm(): void {
        //   this.client$.forEach(el => this.form.patchValue(el));
    }

    save(): void {
        //  this.client$ = this.store$.pipe(select(getSelectLabor));
        // this.clientInfoService.updateLabor(this.form.value, this.form.value.id);
        //  this.clientInfoService.getLaborById$();
    }
    cancel(): void {
        this.fillForm();
    }

    add(): void {
        //  this.client$ = this.store$.pipe(select(getSelectLabor));
        // this.clientInfoService.addLabor(this.form.value);
        //  this.form.reset();
    }
}
