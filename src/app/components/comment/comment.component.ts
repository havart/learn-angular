import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, switchMapTo, takeUntil } from 'rxjs/operators';
import { AddCommentInterface } from '../../interfaces/add-comment.interface';
import { CommentInterface } from '../../interfaces/comment.interface';
import { CommentsService } from '../../services/comments.service';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent implements OnInit, OnDestroy {
    public commentsList$: Observable<CommentInterface[]>;
    public commentForm: FormControl = new FormControl();
    public clientId: string;
    private onDestroy$ = new Subject<boolean>();

    constructor(
        private readonly commentsService: CommentsService,
        private readonly route: ActivatedRoute,
        private readonly userAuthService: UserAuthService,
    ) {}

    ngOnInit(): void {
        this.commentsList$ = this.route.paramMap.pipe(
            switchMap(params => {
                this.clientId = params.get('id');

                return this.commentsService.getComment$(this.clientId);
            }),
        );
    }

    ngOnDestroy(): void {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }

    addComment(): void {
        const comment: AddCommentInterface = {
            createdAt: new Date().toISOString(),
            name: this.userAuthService.getUser(),
            comment: this.commentForm.value,
            isComment: true,
        };

        this.commentsService
            .addComment$(comment)
            .pipe(
                switchMapTo(this.commentsService.fetchComments$(this.clientId)),
                takeUntil(this.onDestroy$),
            )
            .subscribe();

        this.commentForm.setValue('');
    }
}
