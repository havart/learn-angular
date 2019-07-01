import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthorizationService } from '../authorization.service';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  public authForm: FormGroup = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
  });
  constructor(public data: AuthorizationService) {}

  ngOnInit() {
  }

  submit(): void {
    if (this.authForm.status === 'VALID') {
      this.data.setLocalStorage(this.authForm.controls.login.value);
    }
  }

}
