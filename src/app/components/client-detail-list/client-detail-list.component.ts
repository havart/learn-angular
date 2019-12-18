import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { routesLinks } from '../../configs/routes-path.const';
import { RouteLink } from '../../interfaces/routes-link.interface';

@Component({
    selector: 'app-client-detail-list',
    templateUrl: './client-detail-list.component.html',
    styleUrls: ['./client-detail-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientDetailListComponent implements OnInit {
    navLinks: ReadonlyArray<RouteLink>;

    ngOnInit(): void {
        this.navLinks = [...routesLinks];
    }
}
