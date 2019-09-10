import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRenderingTabComponent } from './video-rendering-tab.component';

describe('VideoRenderingTabComponent', () => {
    let component: VideoRenderingTabComponent;
    let fixture: ComponentFixture<VideoRenderingTabComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VideoRenderingTabComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VideoRenderingTabComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
