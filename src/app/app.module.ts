import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { UserAuthService } from './services/user-auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginPageModule
  ],
  providers: [ UserAuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
