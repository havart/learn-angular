import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserAuthService } from '../../services/user-auth.service';
import { Router } from '@angular/router';

import { LoginFormControlEnum } from './form-controls-enum';

@Component({
    selector: 'login-app',
    templateUrl: './user-auth.component.html',
    styleUrls: ['./user-auth.component.scss'],
})
export class UserAuthComponent implements OnInit {
    public loginForm: FormGroup;
    loginFormControlEnum: typeof LoginFormControlEnum = LoginFormControlEnum;

    constructor(private formBuilder: FormBuilder, private userAuthService: UserAuthService, private router: Router) {}

    ngOnInit() {
        this.initLoginForm();
    }

    public submitForm() {
        const userLogin: string = this.loginForm.get(this.loginFormControlEnum.LOGIN).value;

        this.userAuthService.setUser(userLogin);
    }

    private initLoginForm() {
        this.loginForm = this.formBuilder.group({
            [this.loginFormControlEnum.LOGIN]: ['', [Validators.required]],
            [this.loginFormControlEnum.PASSWORD]: ['', [Validators.required]],
        });
    }
}
