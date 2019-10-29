import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/angular-material.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';

@NgModule({
    declarations: [MainLayoutComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, ToolbarModule],
    exports: [CommonModule, MainLayoutComponent, MaterialModule, ToolbarModule],
    providers: [],
})
export class MainPageModule {}
