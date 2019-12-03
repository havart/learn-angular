import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GetStepService } from '../../services/get-step.service';
import { StepInterface } from '../../interfaces/step.interface';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent implements OnInit {
    public stepsList$: Observable<StepInterface[]>;

    constructor(private readonly getStepService: GetStepService, private readonly route: ActivatedRoute) {}

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;

        this.stepsList$ = this.getStepService.getStep$(id);
    }
}
