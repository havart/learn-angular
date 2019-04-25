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
import { MatMenuModule, MatTabsModule } from '@angular/material';
import { SidebarComponent } from './components/smart/sidebar/sidebar.component';

@NgModule({
    declarations: [AppComponent, ToolbarComponent, HomeComponent, PageNotFoundComponent, SidebarComponent],
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
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
