import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MathHelper } from '../../../helpers/math.helper';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { CommentInterface } from '../../../interfaces/comment.interface';
import { CommentsService } from '../../../services/comments.service';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent implements OnInit {
    public commentForm: FormGroup;
    commentList$: Observable<CommentInterface[]>;

    constructor(private mathHelper: MathHelper, private commentsService: CommentsService) {}

    ngOnInit() {
        this.commentForm = new FormGroup({
            comment: new FormControl('', Validators.required),
        });
        this.getCommentFromServer();
    }

    getCommentFromServer() {
        const url = `http://5bfff0a00296210013dc7e82.mockapi.io/test/steps`;
        this.commentList$ = this.commentsService
            .getComments$(url)
            .pipe(filter((comments: CommentInterface[]) => comments.isComment === true));
    }

    submit(): void {
        this.commentForm.reset();
    }

    getDate(): string {
        return String(new Date());
    }
}
