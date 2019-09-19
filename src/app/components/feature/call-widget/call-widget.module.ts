import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallWidgetComponent } from '../../dumb/call-widget/call-widget.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [CallWidgetComponent],
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule],
  exports: [
    CallWidgetComponent,
  ],
})
export class CallWidgetModule {}
