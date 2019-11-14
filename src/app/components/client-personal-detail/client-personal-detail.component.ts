import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { routesLinks } from '../../configs/routes-path.const';
import { RouteLink } from '../../interfaces/routes-link.interface';

@Component({
    selector: 'app-client-personal-detail',
    templateUrl: './client-personal-detail.component.html',
    styleUrls: ['./client-personal-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientPersonalDetailComponent implements OnInit {
    navLinks: ReadonlyArray<RouteLink>;

    ngOnInit(): void {
        this.navLinks = [...routesLinks];
    }
}
