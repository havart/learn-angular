import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRenderingComponent } from './video-rendering.component';

describe('VideoRenderingComponent', () => {
    let component: VideoRenderingComponent;
    let fixture: ComponentFixture<VideoRenderingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VideoRenderingComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VideoRenderingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
