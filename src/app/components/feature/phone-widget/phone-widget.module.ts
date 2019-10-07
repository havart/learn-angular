import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneWidgetService } from './service/phone-widget.service';
import { PhoneWidgetComponent } from './phone-widget/phone-widget.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TimerPipe } from './pipe/timer.pipe';

@NgModule({
    declarations: [PhoneWidgetComponent, TimerPipe],
    imports: [CommonModule, MatIconModule, MatProgressSpinnerModule],
    providers: [PhoneWidgetService],
    exports: [PhoneWidgetComponent],
})
export class PhoneWidgetModule {}
