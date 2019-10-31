import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from '../../../../services/user-auth.service';
import { Router } from '@angular/router';
import { LoginFormControlEnum } from './form-controls-enum';
import { RoutingPathEnum } from '../../../../app-routing-enum';

@Component({
    selector: 'app-login',
    templateUrl: './user-auth.component.html',
    styleUrls: ['./user-auth.component.scss'],
})
export class UserAuthComponent implements OnInit {
    public loginForm: FormGroup;
    loginFormControlEnum: typeof LoginFormControlEnum = LoginFormControlEnum;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly userAuthService: UserAuthService,
        private readonly router: Router,
    ) {}

    ngOnInit(): void {
        this.initLoginForm();
    }

    public submitForm(): void {
        const userLogin: string = this.loginForm.get(this.loginFormControlEnum.LOGIN).value;

        if (userLogin) {
            this.userAuthService.setUser(userLogin);
            this.router.navigate([RoutingPathEnum.START]);
        }
    }

    private initLoginForm(): void {
        this.loginForm = this.formBuilder.group({
            [this.loginFormControlEnum.LOGIN]: ['', [Validators.required]],
            [this.loginFormControlEnum.PASSWORD]: ['', [Validators.required]],
        });
    }
}
