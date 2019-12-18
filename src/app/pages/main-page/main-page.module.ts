import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/angular-material.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { ClientComponent } from '../../components/client/client.component';
import { AgeTransformPipe } from '../../pipes/age-transform.pipe';
import { TimePipe } from '../../pipes/time.pipe';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { CommentComponent } from '../../components/comment/comment.component';
import { MainPageRoutingModule } from './main-page.routing.module';
import { ClientActivityComponent } from '../../components/client-activity/client-activity.component';
import { ClientContactsListComponent } from '../../components/client-contacts-list/client-contacts-list.component';
import { ClientDetailComponent } from '../../components/client-detail/client-detail.component';
import { ContactComponent } from '../../components/contacts/contact.component';
import { ButtonCallComponent } from 'src/app/components/button-call/button-call.component';
import { WidgetCallComponent } from '../../components/widget-call/widget-call.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { TimerComponent } from '../../components/timer/timer.component';
import { ContactComponent } from 'src/app/components/contacts/contact.component';
import { ClientActivityDetailComponent } from '../../components/client-activity-detail/client-activity-detail.component';
import { ClientDetailListComponent } from 'src/app/components/client-detail-list/client-detail-list.component';
import { ClientDataComponent } from 'src/app/components/client-data/client-data.component';

@NgModule({
    declarations: [
        MainLayoutComponent,
        AgeTransformPipe,
        TimePipe,
        SideBarComponent,
        CommentComponent,
        ClientDataComponent,
        ClientComponent,
        ClientDetailComponent,
        ClientDetailListComponent,
        ClientActivityComponent,
        ClientContactsListComponent,
        ClientActivityDetailComponent,
        ContactComponent,
        WidgetCallComponent,
        ButtonCallComponent,
        LoaderComponent,
        TimerComponent,
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, ToolbarModule, MainPageRoutingModule],
    exports: [
        CommonModule,
        MainLayoutComponent,
        MaterialModule,
        ToolbarModule,
        SideBarComponent,
        CommentComponent,
        ClientComponent,
        ClientDataComponent,
        ClientDetailComponent,
        ClientDetailListComponent,
        ClientActivityComponent,
        ClientContactsListComponent,
        ClientActivityDetailComponent,
        ContactComponent,
        WidgetCallComponent,
        ButtonCallComponent,
        LoaderComponent,
        TimerComponent
    ],
    providers: [],
})
export class MainPageModule {}
