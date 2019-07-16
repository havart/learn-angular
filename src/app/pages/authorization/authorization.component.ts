import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationComponent implements OnInit {
    public authForm: FormGroup;

    constructor(public localStotageService: LocalStorageService, private router: Router) {}

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
        console.log(this.authForm);
        if (this.authForm.status === 'VALID') {
            this.localStotageService.setUser(this.authForm.controls.login.value);
            this.router.navigate(['operator']);
        }
    }
}
