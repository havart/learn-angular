import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperatorBaseComponent } from './main-page/operator-base/operator-base.component';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { SideBarOperatorComponent } from './main-page/side-bar-operator/side-bar-operator.component';
import { ToolBarOperatorComponent } from './main-page/tool-bar-operator/tool-bar-operator.component';
import { SideBarService } from './side-bar.service';
import { RightListComponent } from './main-page/right-list/right-list.component';

@NgModule({
    declarations: [
        AppComponent,
        OperatorBaseComponent,
        SideBarOperatorComponent,
        ToolBarOperatorComponent,
        RightListComponent,
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
    ],
    providers: [SideBarService],
    bootstrap: [AppComponent],
})
export class AppModule {}
