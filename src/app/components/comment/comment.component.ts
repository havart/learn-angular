import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StepInterface, StepsInterface } from '../../interfaces/step.interface';
import { GetCommentService } from '../../services/get-comment.service';
import { Store, select } from '@ngrx/store';
import { GlobalState } from 'src/app/+store';
import { ActivatedRoute } from '@angular/router';
import { getStepsById } from 'src/app/+store/steps/steps.selectors';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
    public commentsList$: Observable<StepsInterface>;

    constructor(
        private readonly getCommentService: GetCommentService,
        private readonly store$: Store<GlobalState>,
        private readonly route: ActivatedRoute,
    ) {}

    ngOnInit(): void {}
}
