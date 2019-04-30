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
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { SidebarComponent } from './components/smart/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { StepService } from './services/stepService/step.service';
import { ClientComponent } from './components/smart/client/client.component';
import { Config } from './services/config';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        HomeComponent,
        PageNotFoundComponent,
        SidebarComponent,
        ClientComponent,
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
        HttpClientModule,
    ],
    providers: [StepService, Config],
    bootstrap: [AppComponent],
})
export class AppModule {}
