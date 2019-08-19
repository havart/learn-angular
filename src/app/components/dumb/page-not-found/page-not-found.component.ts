import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-page-not-found',
    template: '<h3> Страница не найдена</h3>',
    styles: ['h3{text-align:center}'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {}
