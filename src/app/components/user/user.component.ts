import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Router } from '@angular/router';
import { RoutingPathEnum } from 'src/app/app-routing-enum';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    public user: string;

    constructor(private userAuthService: UserAuthService, private router: Router) {}

    ngOnInit() {
        this.user = this.userAuthService.getUser();
    }

    logOut(): void {
        this.userAuthService.clearUserData();
        this.router.navigate([RoutingPathEnum.LOGIN]);
    }
}
