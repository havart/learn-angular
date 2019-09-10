import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactTabComponent } from './contact-tab.component';
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from '../../smart/contact/contact.component';
import { PhoneNumberFormComponent } from '../../smart/phone-number-form/phone-number-form.component';
import { VideoRenderingComponent } from '../../smart/video-rendering/video-rendering.component';
import { CircleProgressComponent } from '../../smart/circle-progress/circle-progress.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

const routes: Routes = [{ path: '', component: ContactTabComponent, pathMatch: 'full' }];

@NgModule({
    declarations: [
        ContactTabComponent,
        ContactComponent,
        PhoneNumberFormComponent,
        VideoRenderingComponent,
        CircleProgressComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatTabsModule,
        ReactiveFormsModule,
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
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
    ],
    providers: [],
})
export class ContactTabModule {}
