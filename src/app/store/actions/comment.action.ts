import { Action } from '@ngrx/store';
import { CommentInterface } from '../../interfaces/comment.interface';

export enum CommentActionEnum {
  GetComment = 'Get Comment',
  GetCommentSuccess = 'Get Comment Success',
  PutComment = 'Put Comment',
  PutCommentSuccess = 'Put Comment Success',
}

export class GetComment implements Action {
  public readonly type = CommentActionEnum.GetComment;

  constructor() {}
}

export class GetCommentSuccess implements Action {
  public readonly type = CommentActionEnum.GetCommentSuccess;

  constructor(public payload: CommentInterface[]) {
    console.log(payload);
    console.log('243242324');
  }
}

export class PutComment implements Action {
  public readonly type = CommentActionEnum.PutComment;

  constructor() {}
}

export class PutCommentSuccess implements Action {
  public readonly type = CommentActionEnum.PutCommentSuccess;

  constructor(public payload: CommentInterface) {}
}

export type CommentActions = GetComment | GetCommentSuccess;
