import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { ClientInterface } from '../../../interfaces/client.interface';
import { select, Store } from '@ngrx/store';
import { MainState } from '../../../store/state/main.state';
import { selectClient } from '../../../store/selectors/client.selector';
import { distinctUntilChanged, filter, map, pairwise, share, tap, throttleTime } from 'rxjs/operators';
import { Direction, VisibilityState } from './info-client-fixed.enum';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-info-client-fixed',
    templateUrl: './info-client-fixed.component.html',
    styleUrls: ['./info-client-fixed.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('toggle', [
            state(VisibilityState.Hidden, style({ opacity: 0, transform: 'translateY(-100%)' })),
            state(VisibilityState.Visible, style({ opacity: 1, transform: 'translateY(0)' })),
            transition('* => *', animate('200ms ease-in')),
        ]),
    ],
})
export class InfoClientFixedComponent implements OnInit {
    client$: Observable<ClientInterface>;

    constructor(private store$: Store<MainState>) {}

    ngOnInit(): void {
        this.client$ = this.store$.pipe(select(selectClient));
    }
}
