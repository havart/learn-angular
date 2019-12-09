import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingPathEnum } from '../../app-routing-enum';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
    constructor(private readonly router: Router) {}

    public navigateToStartPage(): void {
        this.router.navigate([RoutingPathEnum.START]);
    }
}
