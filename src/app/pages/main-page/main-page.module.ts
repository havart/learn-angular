import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/angular-material.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { ClientComponent } from 'src/app/components/client/client.component';
import { AgeTransformPipe } from 'src/app/pipes/age-transform.pipe';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { CommentComponent } from '../../components/comment/comment.component';
import { MainPageRoutingModule } from './main-page.routing.module';
import { ClientActivityComponent } from 'src/app/components/client-activity/client-activity.component';
import { ClientContactsComponent } from 'src/app/components/client-contacts/client-contacts.component';
import { ClientPersonalDetailComponent } from 'src/app/components/client-personal-detail/client-personal-detail.component';
import { ClientDetailComponent } from 'src/app/components/client-detail/client-detail.component';

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
    ],
    providers: [],
})
export class MainPageModule {}
