import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientLaborActivityInterface } from 'src/app/interfaces/clientLaborActivity.interface';
import { Store, select } from '@ngrx/store';
import { selectLaborActivity } from 'src/app/store/selectors/labor-activity.selector';
import { MainState } from 'src/app/store/state/main.state';
import { tap } from 'rxjs/operators';
import { GetLaborActivity } from 'src/app/store/actions/labor-activity.action';
import { MathHelper } from 'src/app/helpers/math.helper';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LaborActivityEnum } from './labor-activity.enum';
import { ClientLaborActivityService } from 'src/app/services/client-labor-activity.service';
import * as uuid from 'uuid';

@Component({
    selector: 'app-labor-activity-tab',
    templateUrl: './labor-activity-tab.component.html',
    styleUrls: ['./labor-activity-tab.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaborActivityTabComponent implements OnInit {
    laborActivity$: Observable<ClientLaborActivityInterface>;
    laborActivity: ClientLaborActivityInterface;
    form: FormGroup;

    constructor(
        private store: Store<MainState>,
        private mathHelper: MathHelper,
        private clientLaborActivityService: ClientLaborActivityService,
    ) {}

    ngOnInit() {
        this.laborActivity$ = this.store.pipe(
            select(selectLaborActivity),
            tap((laborActivity: ClientLaborActivityInterface) => {
                if (!laborActivity) {
                    const id = this.mathHelper.getRandomNumber(1, 10);
                    this.store.dispatch(new GetLaborActivity(id));
                } else {
                    this.laborActivity = laborActivity;
                    this.initForm();
                }
            }),
        );
    }

    initForm(): void {
        this.form = new FormGroup({
            [LaborActivityEnum.TYPE]: new FormControl(this.laborActivity[LaborActivityEnum.TYPE], Validators.required),
            [LaborActivityEnum.ORGANIZATION_ADDRESS]: new FormControl(
                this.laborActivity[LaborActivityEnum.ORGANIZATION_ADDRESS],
                Validators.required,
            ),
            [LaborActivityEnum.ADDRESS]: new FormControl(
                this.laborActivity[LaborActivityEnum.ADDRESS],
                Validators.required,
            ),
            [LaborActivityEnum.POSITION]: new FormControl(
                this.laborActivity[LaborActivityEnum.POSITION],
                Validators.required,
            ),
            [LaborActivityEnum.OCCUPATION]: new FormControl(
                this.laborActivity[LaborActivityEnum.OCCUPATION],
                Validators.required,
            ),
            [LaborActivityEnum.START_DATE]: new FormControl(
                this.laborActivity[LaborActivityEnum.START_DATE],
                Validators.required,
            ),
            [LaborActivityEnum.INCOME]: new FormControl(
                this.laborActivity[LaborActivityEnum.INCOME],
                Validators.required,
            ),
            [LaborActivityEnum.WORK_PHONE]: new FormControl(
                this.laborActivity[LaborActivityEnum.WORK_PHONE],
                Validators.required,
            ),
            [LaborActivityEnum.SITE]: new FormControl(this.laborActivity[LaborActivityEnum.SITE], Validators.required),
        });
    }

    putLaborActivity(): void {
        function getUpdatedLaborActivity(form, laborActivity: ClientLaborActivityInterface) {
            return { ...laborActivity, ...form.value };
        }
        if (!this.form.pristine && this.form.valid) {
            this.clientLaborActivityService
                .putLaborActivityClient$(getUpdatedLaborActivity(this.form, this.laborActivity), this.laborActivity.id)
                .subscribe();
        }
    }

    reset(): void {
        this.store
            .pipe(select(selectLaborActivity))
            .subscribe((laborActivity: ClientLaborActivityInterface) => this.form.reset(laborActivity));
    }

    // addLaborActivity(): void {
    //     this.form.reset({ occupation: '123' });
    //     this.laborActivity.id = uuid.v1();
    // }
}
