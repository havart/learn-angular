import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoRenderingComponent } from '../../smart/video-rendering/video-rendering.component';
import { ContactTabModule } from '../contact-tab/contact-tab.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CircleProgressComponent } from '../../smart/circle-progress/circle-progress.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatInputModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { LaborActivityTabComponent } from '../labor-activity-tab/labor-activity-tab.component';

const routes: Routes = [{ path: '', component: VideoRenderingComponent, pathMatch: 'full' }];

@NgModule({
    declarations: [VideoRenderingComponent, CircleProgressComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgCircleProgressModule.forRoot({
            radius: 10,
            space: -10,
            outerStrokeGradient: true,
            outerStrokeWidth: 10,
            outerStrokeColor: '#ffff80',
            outerStrokeGradientStopColor: '#ffff80',
            innerStrokeColor: '#e7e8ea',
            innerStrokeWidth: 10,
            title: 'ui',
            animateTitle: false,
            animationDuration: 1000,
            showUnits: false,
            showBackground: false,
            showTitle: false,
            showSubtitle: false,
            clockwise: true,
            startFromZero: false,
            lazy: false,
        }),
    ],
})
export class VideoRenderingModule {}
