import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StepService } from '../../../services/stepService/step.service';
import { Config } from '../../../services/config';
import { StepInterface } from '../../../interfaces/step-interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
    url: string;
    steps$: Observable<StepInterface>[];

    constructor(private stepService: StepService, private config: Config) {
        this.url = this.config.STEPSURL;
    }

    ngOnInit() {
        this.steps$ = this.stepService.get(this.url).pipe(map(value => value.filter(el => !el.isComment)));
    }
}
