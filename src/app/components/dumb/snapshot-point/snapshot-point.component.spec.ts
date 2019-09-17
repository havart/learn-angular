import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotPointComponent } from './snapshot-point.component';

describe('SnapshotPointComponent', () => {
    let component: SnapshotPointComponent;
    let fixture: ComponentFixture<SnapshotPointComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SnapshotPointComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SnapshotPointComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
