import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { UserAuthService } from './services/user-auth.service';
import { AppComponent } from './app.component';
import { UserAuthGuard } from './guards/auth-guard';
import { StartPageModule } from './pages/start-page/start-page.module';
import { MainPageModule } from './pages/main-page/main-page.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LoginPageModule,
        StartPageModule,
        MainPageModule,
    ],
    providers: [UserAuthService, UserAuthGuard],
    bootstrap: [AppComponent],
})
export class AppModule {}
