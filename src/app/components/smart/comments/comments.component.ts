import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommentService } from 'src/app/services/comment/comment.service';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/interfaces/comment.interface';
import { FormControl } from '@angular/forms';
import { ClientInfoService } from '../../../services/clientInfoService/client-info.service';

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

    constructor(private commentService: CommentService, private clientService: ClientInfoService) {}

    ngOnInit() {
        this.comments$ = this.commentService.comments$;
        this.clientService.clientInfo$.subscribe(el => (this.clientName = el.lastName));
        this.commentService.getComments$().subscribe();
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
