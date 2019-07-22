import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MathHelper } from '../../../helpers/math.helper';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { CommentInterface } from '../../../interfaces/comment.interface';
import { CommentsService } from '../../../services/comments.service';
import { CommentEnum } from './comment.enum';
import { LocalStorageService } from '../../../services/local-storage.service';
import { USERNAME } from '../tool-bar-operator/tool-bar.constants';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent implements OnInit {
    public commentForm: FormGroup;

    public commentEnum = CommentEnum;
    public commentList$: Observable<CommentInterface[]>;

    private userName: string;

    constructor(
        private mathHelper: MathHelper,
        private commentsService: CommentsService,
        private localStorageService: LocalStorageService,
    ) {}

    ngOnInit() {
        this.commentForm = new FormGroup({
            [CommentEnum.COMMENT]: new FormControl('', Validators.required),
        });
        this.getCommentFromServer();
        this.userName = this.localStorageService.getUser()[USERNAME];
    }

    getCommentFromServer(): void {
        this.commentList$ = this.commentsService.getComments$();
    }

    submit(): void {
        const minNumberOfId = 1;
        const maxNumberOfId = 20;

        const commentFromInput = this.commentForm.controls.comment.value;

        this.commentForm.reset();
        this.commentsService.putComments$({
            id: this.mathHelper.getRandomNumber(minNumberOfId, maxNumberOfId),
            createdAt:  new Date().toISOString(),
            name: this.userName,
            comment: commentFromInput,
            viewType: 1,
            isComment: true,
        }).subscribe();
    }
}
