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
import { ClientDetailComponent } from './components/client/client-detail.component';
import { ConnectionService } from './services/connection.service';

@NgModule({
    declarations: [AppComponent, StartPageComponent, ClientDetailComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        LoginPageModule,
    ],
    providers: [UserAuthService, ConnectionService, UserAuthGuard],
    bootstrap: [AppComponent],
})
export class AppModule {}
