import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { MatButtonModule, MatSidenavModule, MatListModule, MatToolbarModule } from '@angular/material';

@NgModule({
    declarations: [MainLayoutComponent, SideBarComponent],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatToolbarModule,
    ],
    exports: [CommonModule, MainLayoutComponent, SideBarComponent],
    providers: [],
})
export class MainModule {}
