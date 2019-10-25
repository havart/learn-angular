import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from '../../../services/user-auth.service';
import { Router } from '@angular/router';

import { LoginFormControlEnum } from '../form-controls-enum';
import { RouterEnum } from '../../../app-routing/router-enum/router.enum';

@Component({
    selector: 'app-login',
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

        if (userLogin) {
            this.userAuthService.setUser(userLogin);
            this.router.navigate([`${RouterEnum.START_PAGE}`]);
        }
    }

    private initLoginForm() {
        this.loginForm = this.formBuilder.group({
            [this.loginFormControlEnum.LOGIN]: ['', [Validators.required]],
            [this.loginFormControlEnum.PASSWORD]: ['', [Validators.required]],
        });
    }
}
