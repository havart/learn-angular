import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OPERATOR } from '../../../constants/path.constans';
import { AuthFormStatusEnum } from './auth-form-status.enum';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationComponent implements OnInit {
    public authForm: FormGroup;

    constructor(public localStorageService: LocalStorageService, private router: Router) {}

    ngOnInit() {
        this.authFormInit();
    }

    authFormInit(): void {
        this.authForm = new FormGroup({
            login: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
    }

    submit(): void {
        if (this.authForm.status === AuthFormStatusEnum.VALID) {
            this.localStorageService.setUser(this.authForm.controls.login.value);
            this.router.navigate([OPERATOR]);
        }
        this.authForm.reset();
    }
}
