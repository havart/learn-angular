import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCommentService } from '../../services/get-comment.service';
import { ActivatedRoute } from '@angular/router';
import { CommentInterface } from 'src/app/interfaces/comment.interface';

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

        this.commentsList$ = this.getCommentService.getCommentsByClientId$(id);
    }
}
