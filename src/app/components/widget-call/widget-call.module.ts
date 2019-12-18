import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/angular-material.module';
import { TimerPipe } from '../../pipes/timer.pipe';
import { TimerComponent } from '../timer/timer.component';
import { WidgetCallComponent } from './widget-call.component';
import { WidgetCallStatusComponent } from './widget-call-status/widget-call-status.component';

@NgModule({
    declarations: [
        TimerPipe,
        WidgetCallComponent,
        TimerComponent,
        WidgetCallStatusComponent,
    ],
    imports: [CommonModule, MaterialModule],
    exports: [WidgetCallComponent],
})
export class WidgetCallModule {}
