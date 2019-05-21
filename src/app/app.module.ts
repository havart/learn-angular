import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './components/smart/toolbar/toolbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { CommentsComponent } from './components/smart/comments/comments.component';
import { CommentService } from './services/comment/comment.service';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { API } from './services/API';
import { StepItemComponent } from './components/smart/sidebar/step-item.component';
import { StepService } from './services/stepService/step.service';
import { ClientComponent } from './components/smart/client/client.component';
import { MainTabComponent } from './components/smart/main-tab/main-tab.component';
import { ClientLaborActivityComponent } from './components/smart/client-labor-activity/client-labor-activity.component';
import { LaborActivityFormComponent } from './components/smart/labor-activity-form/labor-activity-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/state/app.state';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        MainTabComponent,
        HomeComponent,
        PageNotFoundComponent,
        CommentsComponent,
        StepItemComponent,
        ClientComponent,
        ClientLaborActivityComponent,
        LaborActivityFormComponent,
    ],
    imports: [
        MatToolbarModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatCardModule,
        MatChipsModule,
        MatButtonModule,
        MatSidenavModule,
        MatMenuModule,
        MatTabsModule,
        MatGridListModule,
        HttpClientModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers, {
            metaReducers,
        }),
         !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: [CommentService, API, StepService],
    bootstrap: [AppComponent],
})
export class AppModule {}
