import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { ClientDetailComponent } from '../../components/client/client-detail.component';
import { AgeTransformPipe } from '../../pipes/age-transform.pipe';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { MaterialModule } from '../../modules/angular-material.module';

@NgModule({
    declarations: [MainLayoutComponent, ClientDetailComponent, AgeTransformPipe, SideBarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, ToolbarModule],
    exports: [CommonModule, MainLayoutComponent, MaterialModule, ToolbarModule],
    providers: [],
})
export class MainPageModule {}
