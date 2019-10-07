import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallInfoClientComponent } from './small-info-client.component';

describe('SmallInfoClientComponent', () => {
    let component: SmallInfoClientComponent;
    let fixture: ComponentFixture<SmallInfoClientComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SmallInfoClientComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SmallInfoClientComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
