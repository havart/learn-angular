import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperatorBaseComponent } from './pages/main-page/operator-base/operator-base.component';
import {
  MatButtonModule, MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import { SideBarOperatorComponent } from './components/dumb/side-bar-operator/side-bar-operator.component';
import { ToolBarOperatorComponent } from './components/dumb/tool-bar-operator/tool-bar-operator.component';
import { SideBarService } from './services/side-bar.service';
import { RightListComponent } from './components/dumb/right-list/right-list.component';
import { AuthorizationComponent } from './components/smart/authorization/authorization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './components/dumb/task/task.component';
import { CommentComponent } from './components/dumb/comment/comment.component';

@NgModule({
    declarations: [
        AppComponent,
        OperatorBaseComponent,
        SideBarOperatorComponent,
        ToolBarOperatorComponent,
        RightListComponent,
        AuthorizationComponent,
        TaskComponent,
        CommentComponent,
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
  ],
    providers: [SideBarService],
    bootstrap: [AppComponent],
})
export class AppModule {}
