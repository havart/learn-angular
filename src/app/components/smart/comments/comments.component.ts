import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommentService } from 'src/app/services/comment/comment.service';
import { Observable } from 'rxjs';
import { ICommentStep } from 'src/app/interfaces/commentStep.interface';
import { FormControl } from '@angular/forms';
import { IClient } from '../../../interfaces/client.interface';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store/app.state';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { selectGetClient } from '../../../store/client/client.selector';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent implements OnInit {
    comments$: Observable<ICommentStep[]>;
    comment: ICommentStep = {
        id: '',
        createdAt: '',
        name: '',
        comment: '',
        viewType: 'viewType 1',
        isComment: true,
    };
    clientName: string;
    userComment: FormControl = new FormControl('');
    clientId: string;

    constructor(private commentService: CommentService, private store$: Store<IAppState>) {}

    ngOnInit() {
        this.comments$ = this.store$.select(selectGetClient).pipe(
            filter((client: IClient) => !!client),
            tap((client: IClient) => {
                this.clientName = client.lastName;
                this.clientId = client.id;
            }),
            switchMap(({ id }: IClient) =>
                this.commentService.getComments$(id).pipe(
                    filter((comments: ICommentStep[]) => !!comments),
                    map((comments: ICommentStep[]) => comments.filter((comment: ICommentStep) => comment.isComment)),
                ),
            ),
        );
    }

    addComment(): void {
        this.comment = {
            ...this.comment,
            id: '' + Math.floor(Math.random() * 100 + 1),
            createdAt: new Date().toString(),
            name: this.clientName,
            comment: this.userComment.value,
        };
        this.commentService.addComment$(this.comment, this.clientId).subscribe();
        this.userComment.setValue('');
    }
}
