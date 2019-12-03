import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommentInterface } from '../../interfaces/comment.interface';
import { GetCommentService } from '../../services/get-comment.service';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
    public commentsList$: Observable<CommentInterface[]>;

    constructor(private readonly getCommentService: GetCommentService, private readonly route: ActivatedRoute) {}

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;

        this.commentsList$ = this.getCommentService.getComment$(id);
    }
}
