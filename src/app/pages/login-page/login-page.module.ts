import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { MaterialModule } from 'src/app/modules/angular-material.module';

@NgModule({
    declarations: [UserAuthComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
    exports: [CommonModule, UserAuthComponent, MaterialModule],
    providers: [],
})
export class LoginPageModule {}
