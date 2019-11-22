import { createFeatureSelector } from '@ngrx/store';
import * as fromComment from './comments.reducer';

export const getCommentsState = createFeatureSelector<fromComment.CommentsStateInterface>('comments');
