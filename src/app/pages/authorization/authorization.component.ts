import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
import { OPERATOR } from '../../constants/path.constans';

enum AuthFormStatusEnum {
    VALID = 'VALID',
    INVALID = 'INVALID',
}

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
        if (this.authForm.status === AuthFormStatusEnum.VALID) {
            this.localStotageService.setUser(this.authForm.controls.login.value);
            this.router.navigate([OPERATOR]);
        }
    }
}
