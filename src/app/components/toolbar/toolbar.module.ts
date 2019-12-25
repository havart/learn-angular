import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/angular-material.module';
import { PhoneWidgetModule } from '../phone-widget/phone-widget.module';
import { ToolbarComponent } from './toolbar.component';
import { LogoComponent } from '../logo/logo.component';
import { UserComponent } from '../user/user.component';

@NgModule({
    declarations: [ToolbarComponent, LogoComponent, UserComponent],
    imports: [CommonModule, MaterialModule, PhoneWidgetModule],
    exports: [CommonModule, ToolbarComponent, MaterialModule, PhoneWidgetModule],
    providers: [],
})
export class ToolbarModule {}
