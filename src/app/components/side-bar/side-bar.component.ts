import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetStepService } from '../../services/get-step.service';
import { StepInterface } from '../../interfaces/step.interface';
import { ActivatedRoute } from '@angular/router';

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
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;

        this.stepsList$ = this.getStepService.getStepByClientId$(id);
    }
}
