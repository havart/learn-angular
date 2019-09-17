import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDividerComponent } from './video-divider.component';

describe('VideoDividerComponent', () => {
    let component: VideoDividerComponent;
    let fixture: ComponentFixture<VideoDividerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VideoDividerComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VideoDividerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
