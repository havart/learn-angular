import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VideoRenderingTabComponent } from './video-rendering-tab.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { VideoDividerComponent } from '../../smart/video-divider/video-divider.component';
import { SnapshotPointComponent } from '../../dumb/snapshot-point/snapshot-point.component';

const routes: Routes = [{ path: '', component: VideoRenderingTabComponent, pathMatch: 'full' }];

@NgModule({
    declarations: [VideoRenderingTabComponent, VideoDividerComponent, SnapshotPointComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgCircleProgressModule.forRoot({
            radius: 40,
            outerStrokeWidth: 5,
            outerStrokeColor: '#FFD700',
            backgroundColor: 'white',
            backgroundPadding: -10,
            showZeroOuterStroke: false,
            showSubtitle: false,
            showUnits: false,
            showInnerStroke: false,
            animation: false,
        }),
    ],
})
export class VideoRenderingTabModule {}
