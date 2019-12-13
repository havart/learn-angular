import { Component, OnInit } from '@angular/core';
import { Subject, Observable, timer } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
public interval = 1000;
public count = 10;
public isStoped = false;

private _counterSource$ = new Subject<any>();

ngOnInit(): void {
   timer(0, this.interval).pipe(
          take(this.count),
          tap(() => {
            --this.count;
            console.log(this.count)
            if (this.count === 0) {
                this.isStoped = true;
            }
          }),
          ).subscribe();
}
}
