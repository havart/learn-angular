import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLaborActivityClientComponent } from './info-labor-activity-client.component';

describe('InfoLaborActivityClient', () => {
    let component: InfoLaborActivityClientComponent;
    let fixture: ComponentFixture<InfoLaborActivityClientComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InfoLaborActivityClientComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InfoLaborActivityClientComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
