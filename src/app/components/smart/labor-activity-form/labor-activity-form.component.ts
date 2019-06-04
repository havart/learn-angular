import { Component, OnInit, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { ILabor } from 'src/app/interfaces/labor.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmploymentsConfig } from 'src/app/config/employment.config';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { IAppState } from 'src/app/store/state/app.state';
import { LaborService } from '../../../services/labor/labor.service';

@Component({
    selector: 'app-labor-activity-form',
    templateUrl: './labor-activity-form.component.html',
    styleUrls: ['./labor-activity-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaborActivityFormComponent implements OnInit, DoCheck {
    form: FormGroup = new FormGroup({});
    employments: ReadonlyArray<string>;
    buttonVisibility = true;
    tempForm: ILabor;

    constructor(
        private laborService: LaborService,
        private store$: Store<IAppState>,
        private formBuilder: FormBuilder,
        private config: EmploymentsConfig,
    ) {}

    ngOnInit() {
        this.employments = this.config.EMPLOYMENTLIST;

        this.laborService
            .getLaborById$(1)
            .pipe(filter((labor: ILabor) => !!labor))
            .subscribe(labor => {
                this.form.patchValue(labor);
                this.tempForm = labor;
            });

        this.initForm();
    }
    ngDoCheck() {
        this.buttonVisibility = _.isEqual(this.form.value, this.tempForm);
    }

    getNext(): void {
        const clientId = Math.floor(Math.random() * 5 + 1);
        this.laborService.fetchAndSave$(clientId).subscribe();
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
        this.form.patchValue(this.tempForm);
    }

    addNewLabor(): void {
        this.laborService.addLabor$(this.form.value).subscribe();
    }
}
