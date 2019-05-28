import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ILabor } from 'src/app/interfaces/labor.interface';
import { ClientInfoService } from 'src/app/services/clientInfoService/client-info.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { getLabor } from 'src/app/store/selectors/client-labor.selector';
import { filter, tap } from 'rxjs/operators';
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
                filter((labor: ILabor) => !!labor),
                tap(value => {
                    console.log(value);
                    this.form.patchValue(value);
                }),
            )
            .subscribe();
        this.initForm();
    }

    getNext(): void {
        const clientId = Math.floor(Math.random() * 5 + 1);
        console.log(clientId);
        this.clientInfoService.fetchAndSave$(clientId).subscribe();
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

    save(): void {
        //  this.client$ = this.store$.pipe(select(getSelectLabor));
        // this.clientInfoService.updateLabor(this.form.value, this.form.value.id);
        //  this.clientInfoService.getLaborById$();
    }

    cancel(): void {}

    add(): void {
        //  this.client$ = this.store$.pipe(select(getSelectLabor));
        // this.clientInfoService.addLabor(this.form.value);
        //  this.form.reset();
    }
}
