import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StepsService } from '../../services/steps.service';
import { StepInterface } from '../../interfaces/step.interface';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent implements OnInit {
    public stepsList$: Observable<StepInterface[]>;

    constructor(private readonly stepsService: StepsService, private readonly route: ActivatedRoute) {}

    ngOnInit(): void {
        this.stepsList$ = this.route.paramMap.pipe(
          switchMap(params => this.stepsService.getStep$(params.get('id'))),
        );
    }
}
