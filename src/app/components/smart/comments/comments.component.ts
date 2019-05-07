import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommentService } from 'src/app/services/comment/comment.service';
import { Observable } from 'rxjs';
import { IComments } from 'src/app/interfaces/comment.interface';
import { map } from 'rxjs/internal/operators';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent implements OnInit {
    comments$: Observable<IComments[]>;

    constructor(private commentServ: CommentService) {}
    ngOnInit() {
        this.comments$ = this.commentServ.get().pipe(map(val => val.filter(el => el.isComment)));
    }
}
