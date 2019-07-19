import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MathHelper } from '../../../helpers/math.helper';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { CommentInterface } from '../../../interfaces/comment.interface';
import { CommentsService } from '../../../services/comments.service';
import { CommentEnum } from './comment.enum';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent implements OnInit {
    public commentForm: FormGroup;
    public commentEnum = CommentEnum;
    commentList$: Observable<CommentInterface[]>;

    constructor(private mathHelper: MathHelper, private commentsService: CommentsService) {}

    ngOnInit() {
        this.commentForm = new FormGroup({
            [CommentEnum.COMMENT]: new FormControl('', Validators.required),
        });
        this.getCommentFromServer();
    }

    getCommentFromServer(): void {
        this.commentList$ = this.commentsService.getComments$();
    }

    submit(): void {
        this.commentForm.reset();
    }
}
