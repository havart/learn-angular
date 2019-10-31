import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/angular-material.module';
import { ToolbarComponent } from './toolbar.component';
import { LogoComponent } from '../logo/logo.component';
import { UserComponent } from '../user/user.component';

@NgModule({
    declarations: [ToolbarComponent, LogoComponent, UserComponent],
    imports: [CommonModule, MaterialModule],
    exports: [CommonModule, ToolbarComponent, MaterialModule],
    providers: [],
})
export class ToolbarModule {}
