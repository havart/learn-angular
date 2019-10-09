import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallWidgetComponent } from '../../smart/call-widget/call-widget.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormatTimePipe } from '../../../pipes/format-time.pipe';
import { WidgetComponentActionsComponent } from '../../smart/call-widget/widget-component-actions/widget-component-actions.component';
import { WidgetComponentStatusComponent } from '../../smart/call-widget/widget-component-status/widget-component-status.component';
import { WidgetComponentUserInfoComponent } from '../../smart/call-widget/widget-component-user-info/widget-component-user-info.component';

@NgModule({
  declarations: [FormatTimePipe, CallWidgetComponent, WidgetComponentActionsComponent, WidgetComponentStatusComponent, WidgetComponentUserInfoComponent],
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule],
  exports: [
    CallWidgetComponent,
  ],
})
export class CallWidgetModule {}
