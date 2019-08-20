import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LaborActivityTabComponent } from './labor-activity-tab.component';
import { MatButtonModule, MatInputModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: LaborActivityTabComponent, pathMatch: 'full' }];

@NgModule({
    declarations: [LaborActivityTabComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatTabsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
    ],
})
export class LaborActivityTabModule {}
