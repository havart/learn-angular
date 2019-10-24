import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { UserAuthComponent } from './user-auth/user-auth.component';

@NgModule({
    declarations: [UserAuthComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
    ],
    exports: [CommonModule, MatInputModule, MatCardModule, MatFormFieldModule, UserAuthComponent, MatButtonModule],
    providers: [],
})
export class LoginPageModule {}
