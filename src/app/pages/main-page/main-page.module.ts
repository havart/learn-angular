import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/angular-material.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { ClientDetailComponent } from 'src/app/components/client/client-detail.component';
import { AgeTransformPipe } from 'src/app/pipes/age-transform.pipe';

@NgModule({
    declarations: [MainLayoutComponent, ClientDetailComponent, AgeTransformPipe],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, ToolbarModule],
    exports: [CommonModule, MainLayoutComponent, MaterialModule, ToolbarModule],
    providers: [],
})
export class MainPageModule {}
