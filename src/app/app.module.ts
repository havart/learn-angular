import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    MatSidenavModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTabsModule,
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
import { mainReducers } from './store/reducers/main.reduce';
import { EffectsModule } from '@ngrx/effects';
import { ClientEffects } from './store/effects/client.effect';
import { OperatorTabsComponent } from './components/dumb/operator-tabs/operator-tabs.component';
import { OperatorTabsModule } from './components/dumb/operator-tabs/features/operator-tabs.module';
import { CommentEffects } from './store/effects/comment.effects';
import { PageNotFoundComponent } from './components/dumb/page-not-found/page-not-found.component';
import { UserMenuComponent } from './components/smart/user-menu/user-menu.component';

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
        OperatorTabsComponent,
        PageNotFoundComponent,
        UserMenuComponent,
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
        MatTabsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatCardModule,
        MatSnackBarModule,
        OperatorTabsModule,
        StoreModule.forRoot(mainReducers),
        StoreDevtoolsModule.instrument({
            maxAge: 50,
        }),
        EffectsModule.forRoot([ClientEffects, CommentEffects]),
    ],
    providers: [SideBarService],
    bootstrap: [AppComponent],
})
export class AppModule {}
