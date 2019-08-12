import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MathHelper } from '../../../helpers/math.helper';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { CommentInterface } from '../../../interfaces/comment.interface';
import { CommentsService } from '../../../services/comments.service';
import { CommentEnum } from './comment.enum';
import { LocalStorageService } from '../../../services/local-storage.service';
import { USERNAME } from '../tool-bar-operator/tool-bar.constants';
import { ClientInterface } from '../../../interfaces/client.interface';
import { select, Store } from '@ngrx/store';
import { selectClient } from '../../../store/selectors/client.selector';
import { MainState } from '../../../store/state/main.state';
import { selectComment } from '../../../store/selectors/comment.selectors';
import { GetClient } from '../../../store/actions/client.action';
import { GetComment } from '../../../store/actions/comment.action';
import { map, take, takeLast, takeUntil, takeWhile } from 'rxjs/operators';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent implements OnInit {
    public commentForm: FormGroup;
    public commentList$: Observable<CommentInterface[]>;

    private userName: string;

    constructor(
        private mathHelper: MathHelper,
        private commentsService: CommentsService,
        private localStorageService: LocalStorageService,
        private store: Store<MainState>,
    ) {}

    ngOnInit() {
        this.commentForm = new FormGroup({
            [CommentEnum.COMMENT]: new FormControl('', Validators.required),
        });
        this.userName = this.localStorageService.getUser()[USERNAME];
        this.store.dispatch(new GetComment());
        this.commentList$ = this.store.pipe(select(selectComment));
    }

    submit(): void {
        const minNumberOfId = 1;
        const maxNumberOfId = 20;
        const commentFromInput = this.commentForm.controls.comment.value;

        this.commentForm.reset();
        this.commentsService
            .putComments$({
                id: this.mathHelper.getRandomNumber(minNumberOfId, maxNumberOfId),
                createdAt: new Date().toISOString(),
                name: this.userName,
                comment: commentFromInput,
                viewType: 1,
                isComment: true,
            })
            .subscribe();
    }
}
