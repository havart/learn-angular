import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborActivityTabComponent } from './labor-activity-tab.component';

describe('LaborActivityTabComponent', () => {
    let component: LaborActivityTabComponent;
    let fixture: ComponentFixture<LaborActivityTabComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LaborActivityTabComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LaborActivityTabComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
