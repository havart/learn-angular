import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentInterface } from '../interfaces/comment.interface';
import { map } from 'rxjs/operators';
import { StepInterface } from '../interfaces/step.interface';

@Injectable({
  providedIn: 'root',
})
export class OperatorStepsService {

  constructor(private http: HttpClient) {}

  getSteps$(): Observable<StepInterface[]> {
    const url = `http://5bfff0a00296210013dc7e82.mockapi.io/test/steps`;
    return this.http
      .get<CommentInterface[]>(url)
      .pipe(map((steps: StepInterface[]) => steps.filter(step => step.isComment === false)));
  }
}
