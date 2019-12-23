import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/angular-material.module';
import { TimerPipe } from '../../pipes/timer.pipe';
import { TimerComponent } from '../timer/timer.component';
import { PhoneWidgetComponent } from './phone-widget.component';

@NgModule({
    declarations: [TimerPipe, TimerComponent, PhoneWidgetComponent],
    imports: [CommonModule, MaterialModule],
    exports: [PhoneWidgetComponent],
})
export class PhoneWidgetModule {}
