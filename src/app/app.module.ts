import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperatorBaseComponent } from './pages/main-page/operator-base/operator-base.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule, MatTabsModule,
  MatToolbarModule,
} from '@angular/material';
import { SideBarOperatorComponent } from './components/dumb/side-bar-operator/side-bar-operator.component';
import { ToolBarOperatorComponent } from './components/dumb/tool-bar-operator/tool-bar-operator.component';
import { SideBarService } from './services/side-bar.service';
import { RightListComponent } from './components/dumb/right-list/right-list.component';
import { AuthorizationComponent } from './components/smart/authorization/authorization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoClientComponent } from './components/dumb/info-client/info-client.component';
import { TaskComponent } from './components/dumb/task/task.component';
import { CommentComponent } from './components/dumb/comment/comment.component';
import { InfoLaborActivityClientComponent } from './components/dumb/info-labor-activity-client/info-labor-activity-client.component';
import { OperatorStepsComponent } from './components/dumb/operator-steps/operator-steps.component';
import { OperatorMainTabsComponent } from './components/dumb/operator-main-tabs/operator-main-tabs.component';

@NgModule({
    declarations: [
        AppComponent,
        OperatorBaseComponent,
        SideBarOperatorComponent,
        ToolBarOperatorComponent,
        RightListComponent,
        AuthorizationComponent,
        TaskComponent,
        InfoClientComponent,
        CommentComponent,
        InfoLaborActivityClientComponent,
        OperatorStepsComponent,
        OperatorMainTabsComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatTabsModule,
  ],
    providers: [SideBarService],
    bootstrap: [AppComponent],
})
export class AppModule {}
