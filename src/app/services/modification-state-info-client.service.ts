import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ModificationStateInfoClientService {
    changeStateScrollInit$(): Observable<boolean> {
        return fromEvent(window, 'scroll').pipe(
            filter(() => window.pageYOffset < 100 || window.pageYOffset > 20),
            map(() => window.pageYOffset > 60),
        );
    }
}
