import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ILabor } from 'src/app/interfaces/labor.interface';
import { ClientInfoService } from 'src/app/services/clientInfoService/client-info.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UpsertLabor } from 'src/app/store/actions/client-labor.action';
import { LABOR } from 'src/app/store/selectors/client-labor.selector';
import { tap } from 'rxjs/operators';

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
        private store: Store<ILabor>,
        private formBuilder: FormBuilder,
    ) {
        this.client$ = this.store.select(LABOR);
    }
    ngOnInit() {
        this.clientInfoService
            .getLaborById$()
            .pipe(
                tap((el: ILabor) => {
                    this.store.dispatch(new UpsertLabor(el)), this.form.patchValue(el);
                }),
            )
            .subscribe();
        this.initForm();
        this.fillForm();
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
        this.client$.forEach(el => this.form.patchValue(el));
    }

    save(): void {
        //  this.client$ = this.store.pipe(select(getSelectLabor));
        // this.clientInfoService.updateLabor(this.form.value, this.form.value.id);
        //  this.clientInfoService.getLaborById$();
    }
    cancel(): void {
        this.fillForm();
    }

    add(): void {
        //  this.client$ = this.store.pipe(select(getSelectLabor));
        // this.clientInfoService.addLabor(this.form.value);
        //  this.form.reset();
    }
}
