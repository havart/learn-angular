import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/angular-material.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { ClientComponent } from '../../components/client/client.component';
import { AgeTransformPipe } from '../../pipes/age-transform.pipe';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { CommentComponent } from '../../components/comment/comment.component';
import { MainPageRoutingModule } from './main-page.routing.module';
import { ClientActivityComponent } from '../../components/client-activity/client-activity.component';
import { ClientContactsComponent } from '../../components/client-contacts/client-contacts.component';
import { ClientPersonalDetailComponent } from '../../components/client-personal-detail/client-personal-detail.component';
import { ClientDetailComponent } from '../../components/client-detail/client-detail.component';
import { ContactComponent } from 'src/app/components/contacts/contact.component';

@NgModule({
    declarations: [
        MainLayoutComponent,
        AgeTransformPipe,
        SideBarComponent,
        CommentComponent,
        ClientComponent,
        ClientDetailComponent,
        ClientPersonalDetailComponent,
        ClientActivityComponent,
        ClientContactsComponent,
        ContactComponent,
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
        ClientDetailComponent,
        ClientPersonalDetailComponent,
        ClientActivityComponent,
        ClientContactsComponent,
        ContactComponent,
    ],
    providers: [],
})
export class MainPageModule {}
