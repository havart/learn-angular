import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page.component';
import { MaterialModule } from 'src/app/modules/angular-material.module';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';

@NgModule({
    declarations: [StartPageComponent],
    imports: [CommonModule, MaterialModule, ToolbarModule],
    exports: [CommonModule, StartPageComponent, MaterialModule, ToolbarModule],
    providers: [],
})
export class StartPageModule {}
