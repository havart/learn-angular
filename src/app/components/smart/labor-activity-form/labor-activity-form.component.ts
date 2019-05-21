import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ILabor } from 'src/app/interfaces/labor.interface';
// import { ClientInfoService } from 'src/app/services/clientInfoService/client-info.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import {  UpsertLabor } from 'src/app/store/actions/client-labor.action';
import { LABOR } from 'src/app/store/selectors/client-labor.selector';

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
    laborState$: Observable<ILabor>;
    // temp = this.store.pipe(select(getSelectLabor));
    // client$;

    constructor(
        // private clientInfoService: ClientInfoService,
        private store: Store<ILabor>,
        private formBuilder: FormBuilder,
    ) {
        // this.store.dispatch(new LoadLabor());
        // this.client$ = this.store.select(getLabor1);
    }
    ngOnInit() {
        //   this.client$ = this.clientInfoService.getLaborById$();
        this.client$ = this.store.pipe(select('id'));
        // this.store.dispatch(new UpsertLabor());
        // this.temp = this.store.pipe(select('type'));
        console.log(this.client$);
        // console.log(this.client$ );
        // this.store.pipe(select(GetLabor));

        // this.client$ = this.clientInfoService.labor$;
        // this.clientInfoService.getLaborById$();
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
        // this.client$.forEach(el => this.form.patchValue(el));
        setTimeout(() => {
            this.client$.forEach(el => this.form.patchValue(el));
        }, 2000);
    }

    save() {
      //  this.client$ = this.store.pipe(select(getSelectLabor));
        // this.clientInfoService.updateLabor(this.form.value, this.form.value.id);
        //  this.clientInfoService.getLaborById$();
    }
    cancel() {
        this.fillForm();
    }

    add() {
      //  this.client$ = this.store.pipe(select(getSelectLabor));
        // this.clientInfoService.addLabor(this.form.value);
        //  this.form.reset();
    }
}
