import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

export interface Data {
    id: string;
    createdAt: string;
    name: string;
    comment: string;
    viewType: string;
    isComment: boolean;
}

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  url = 'http://5bfff0a00296210013dc7e82.mockapi.io/test/steps';
  data: Data[];

    constructor(private commentServ: CommentService) {}

    ngOnInit() {
      this.commentServ.get(this.url).subscribe(
        (value: Data[]) => {
            this.data = value.filter(el => el.isComment);
        },
        error => {
            console.log(error);
        },
    );
    }
}
