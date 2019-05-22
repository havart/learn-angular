import { Component, OnInit, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { ILabor } from 'src/app/interfaces/labor.interface';
import { ClientInfoService } from 'src/app/services/clientInfoService/client-info.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmploymentsConfig } from 'src/app/config/employment.config';
import * as _ from 'lodash';

@Component({
    selector: 'app-labor-activity-form',
    templateUrl: './labor-activity-form.component.html',
    styleUrls: ['./labor-activity-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaborActivityFormComponent implements OnInit, DoCheck {
    form: FormGroup = new FormGroup({});
    client$: Observable<ILabor>;
    employments: ReadonlyArray<string>;
    buttonVisibility = false;
    tempForm: FormGroup;

    constructor(
        private clientInfoService: ClientInfoService,
        private formBuilder: FormBuilder,
        private cofig: EmploymentsConfig,
    ) {}

    ngOnInit() {
        this.employments = this.cofig.EMPLOYMENTLIST;
        this.client$ = this.clientInfoService.labor$;
        this.clientInfoService.getLaborById$().subscribe();
        this.initForm();
        this.fillForm();
    }
    ngDoCheck() {
        this.buttonVisibility = _.isEqual(this.form.value, this.tempForm);
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

    private fillForm() {
        this.client$.forEach(el => {
            if (!!el) {
                this.form.patchValue(el);
                this.tempForm = this.form.value;
            }
        });
    }

    saveLaborChanges(): void {
        this.clientInfoService.updateLabor$(this.form.value, this.form.value.id).subscribe();
    }

    cancelLaborChanges(): void {
        this.fillForm();
    }

    addNewLabor(): void {
        this.clientInfoService.addLabor$(this.form.value).subscribe();
        //  this.form.reset();
    }
}
