import { take, catchError } from 'rxjs/operators';
import { Observer, throwError, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { isUndefined } from 'util';

export const onceRunOrCatch = <T, S>(children$: Observable<S>) => (source$: Observable<T>) =>
    new Observable((observer: Observer<T>) => {
        let isFirstRun = true;

        return source$.subscribe({
            next(item: T): void {
                observer.next(item);

                if (isFirstRun && isUndefined(item)) {
                    children$
                        .pipe(
                            take(1),
                            catchError((error: HttpErrorResponse) => {
                                observer.error(error);

                                return throwError(new Error(JSON.stringify(error)));
                            }),
                        )
                        .subscribe();
                }

                isFirstRun = false;
            },
            error(error): void {
                observer.error(error);
            },
            complete(): void {
                observer.complete();
            },
        });
    });
