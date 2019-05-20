import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ILabor } from 'src/app/interfaces/labor.interface';
import { ClientInfoService } from 'src/app/services/clientInfoService/client-info.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-labor-activity-form',
    templateUrl: './labor-activity-form.component.html',
    styleUrls: ['./labor-activity-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaborActivityFormComponent implements OnInit {
    form: FormGroup = new FormGroup({});
    employments = ['Кастелян', 'Министр', 'Диктатор', 'Глава государства', 'Креативный директор', 'Директор'];
    private _client$: BehaviorSubject<ILabor>;
    private client: ILabor;
    client$: Observable<ILabor>;

    constructor(private clientInfoService: ClientInfoService, private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.client$ = this.clientInfoService.labor$;
        this.clientInfoService.getLaborById$();
        this.initForm();
        this.fillForm();
    }

    private initForm() {
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
        this.client$.forEach(el => this.form.patchValue(el));
    }

    save() {
        this.clientInfoService.updateLabor(this.form.value, this.form.value.id);
        this.clientInfoService.getLaborById$();
    }
    cancel() {
        this.fillForm();
    }

    add() {
        this.clientInfoService.addLabor(this.form.value);
        //  this.form.reset();
    }
}
