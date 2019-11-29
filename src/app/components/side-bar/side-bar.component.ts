import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalState } from '../../+store';
import { StepsUpsertAction } from '../../+store/steps/steps.actions';
import { GetStepService } from '../../services/get-step.service';
import { StepInterface } from '../../interfaces/step.interface';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
    public stepsList$: Observable<StepInterface[]>;

    constructor(
        private readonly getStepService: GetStepService,
        private readonly route: ActivatedRoute,
        private readonly store$: Store<GlobalState>,
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;

        this.getStepService.getStep$().subscribe(result => {
            this.store$.dispatch(new StepsUpsertAction({ clientId: `${id}`, steps: result }));
        });

        this.stepsList$ = this.getStepService.getStepByClientId$(id);
    }
}
