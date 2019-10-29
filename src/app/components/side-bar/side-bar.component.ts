import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetStepService } from '../../services/get-step.service';
import { StepInterface } from '../../interfaces/step.interface';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
    constructor(private getStepService: GetStepService) {}

    public stepsList$: Observable<StepInterface[]>;

    ngOnInit(): void {
        this.stepsList$ = this.getStepService.getStep$();
    }
}
