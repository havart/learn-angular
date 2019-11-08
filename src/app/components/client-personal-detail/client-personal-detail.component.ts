import { Component, OnInit } from '@angular/core';
import { routesLinks } from '../../configs/routes-path.const';

@Component({
    selector: 'app-client-personal-detail',
    templateUrl: './client-personal-detail.component.html',
    styleUrls: ['./client-personal-detail.component.scss'],
})
export class ClientPersonalDetailComponent implements OnInit {
    navLinks: any[];

    ngOnInit(): void {
        this.navLinks = [...routesLinks];
    }
}
