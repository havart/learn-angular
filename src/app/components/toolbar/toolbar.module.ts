import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/angular-material.module';
import { WidgetCallModule } from '../widget-call/widget-call.module';
import { ToolbarComponent } from './toolbar.component';
import { LogoComponent } from '../logo/logo.component';
import { UserComponent } from '../user/user.component';

@NgModule({
    declarations: [ToolbarComponent, LogoComponent, UserComponent],
    imports: [CommonModule, MaterialModule, WidgetCallModule],
    exports: [CommonModule, ToolbarComponent, MaterialModule, WidgetCallModule],
    providers: [],
})
export class ToolbarModule {}
