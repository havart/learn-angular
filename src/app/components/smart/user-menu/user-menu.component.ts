import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';
import { LOGIN } from 'src/app/constants/path.constans';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent {
    constructor(private localStorageService: LocalStorageService, private router: Router) {}

    logOutUser(): void {
        this.localStorageService.deleteLocalStorageUser();
        this.router.navigate([LOGIN]);
    }
}
