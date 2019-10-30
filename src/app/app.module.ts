import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { UserAuthService } from './services/user-auth.service';
import { AppComponent } from './app.component';
import { UserAuthGuard } from './guards/auth-guard';
import { StartPageModule } from './pages/start-page/start-page.module';
import { MainPageModule } from './pages/main-page/main-page.module';
import { ConnectionService } from './services/connection.service';

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
    providers: [UserAuthService, ConnectionService, UserAuthGuard],
    bootstrap: [AppComponent],
})
export class AppModule {}
