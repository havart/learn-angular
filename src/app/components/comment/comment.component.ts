import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StepInterface } from '../../interfaces/step.interface';
import { GetCommentService } from '../../services/get-comment.service';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
    public commentsList$: Observable<StepInterface[]>;

    constructor(private readonly getCommentService: GetCommentService) {}

    ngOnInit(): void {
        this.commentsList$ = this.getCommentService.getComment$();
    }
}
