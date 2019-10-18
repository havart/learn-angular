import { Component,  OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserAuthService } from '../../services/user-auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-app',
    templateUrl: './user-auth.component.html',
    styleUrls: ['./user-auth.component.scss'],
})
export class UserAuthComponent implements OnInit{ 
    public loginForm: FormGroup;
   
    constructor(private formBuilder: FormBuilder,
                private userAuthService: UserAuthService, private router: Router ){}
    
    ngOnInit() {  
        this.initLoginForm();
    }
    
    public submitForm() {
        const userLogin = this.loginForm.get('login').value;
        this.userAuthService.setUser(userLogin);
        //this.router.navigateByUrl('/home')
    }

    private initLoginForm() {
        this.loginForm = this.formBuilder.group({
            "login": ["", [Validators.required]],
            "password": ["", [Validators.required]]
        })
    };
}
