import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalState } from '../../+store';
import { CommentsUpsertAction } from '../../+store/comments/comments.actions';
import { CommentInterface } from '../../interfaces/comment.interface';
import { GetCommentService } from '../../services/get-comment.service';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
    public commentsList$: Observable<CommentInterface[]>;

    constructor(
        private readonly getCommentService: GetCommentService,
        private readonly route: ActivatedRoute,
        private readonly store$: Store<GlobalState>,
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;

        this.getCommentService.getComment$().subscribe(result => {
            this.store$.dispatch(new CommentsUpsertAction({ clientId: `${id}`, comments: result }));
        });

        this.commentsList$ = this.getCommentService.getCommentsByClientId$(id);
    }
}
