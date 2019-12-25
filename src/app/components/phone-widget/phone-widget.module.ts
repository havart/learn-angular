import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/angular-material.module';
import { TimerPipe } from '../../pipes/timer.pipe';
import { ButtonCallComponent } from '../button-call/button-call.component';
import { PhoneFieldComponent } from '../phone-field/phone-field.component';
import { TimerComponent } from '../timer/timer.component';
import { PhoneWidgetComponent } from './phone-widget.component';

@NgModule({
    declarations: [TimerPipe, TimerComponent, PhoneWidgetComponent, PhoneFieldComponent, ButtonCallComponent],
    imports: [CommonModule, MaterialModule, ReactiveFormsModule],
    exports: [PhoneWidgetComponent, PhoneFieldComponent, ButtonCallComponent],
})
export class PhoneWidgetModule {}
