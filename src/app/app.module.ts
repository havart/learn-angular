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
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { reducers, metaReducers } from './+store';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LoginPageModule,
        StartPageModule,
        StoreModule.forRoot(reducers, {
            metaReducers,
        }),
        StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: [UserAuthService, UserAuthGuard],
    bootstrap: [AppComponent],
})
export class AppModule {}
