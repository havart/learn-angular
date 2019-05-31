import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommentService } from 'src/app/services/comment/comment.service';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/interfaces/comment.interface';
import { FormControl } from '@angular/forms';
import { ClientInfoService } from '../../../services/clientInfoService/client-info.service';
import { IClient } from '../../../interfaces/client.interface';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { selectGetComments } from '../../../store/selectors/comment.selector';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent implements OnInit {
    comments$: Observable<IComment[]>;
    comment: IComment = {
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

    constructor(
        private commentService: CommentService,
        private store$: Store<IAppState>,
        private clientService: ClientInfoService,
    ) {
        this.comments$ = this.store$.pipe(select(selectGetComments));
    }

    ngOnInit() {
        this.clientId = '' + Math.floor(Math.random() * 10 + 1);

        this.clientService.getClientById$(this.clientId).subscribe((value: IClient) => {
            return (this.clientName = value.lastName);
        });

        this.commentService.getComments$();
    }

    addComment(): void {
        this.comment = {
            ...this.comment,
            id: '' + Math.floor(Math.random() * 100 + 1),
            createdAt: new Date().toString(),
            name: this.clientName,
            comment: this.userComment.value,
        };
        this.commentService.addComment$(this.comment).subscribe();
        this.userComment.setValue('');
    }
}
