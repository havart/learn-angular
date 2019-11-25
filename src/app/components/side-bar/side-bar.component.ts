import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetStepService } from '../../services/get-step.service';
import { StepInterface } from '../../interfaces/step.interface';
import { Store, select } from '@ngrx/store';
import { GlobalState } from 'src/app/+store';
import { ActivatedRoute } from '@angular/router';
import { getStepsById } from 'src/app/+store/steps/steps.selectors';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
    public stepsList$: Observable<StepInterface[]>;

    constructor(
        private readonly getStepService: GetStepService,
        private readonly store$: Store<GlobalState>,
        private readonly route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;
        this.stepsList$ = this.store$
            .pipe(
                select(getStepsById(id)),
                filter(Boolean),
            )
            .subscribe(({ steps }) => console.log(steps));
    }
}
