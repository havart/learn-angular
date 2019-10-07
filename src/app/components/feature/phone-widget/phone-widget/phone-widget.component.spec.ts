import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneWidgetComponent } from './phone-widget.component';

describe('PhoneWidgetComponent', () => {
    let component: PhoneWidgetComponent;
    let fixture: ComponentFixture<PhoneWidgetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PhoneWidgetComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PhoneWidgetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
