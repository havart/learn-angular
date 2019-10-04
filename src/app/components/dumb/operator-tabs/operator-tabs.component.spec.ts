import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorTabsComponent } from './operator-tabs.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('OperatorTabsComponent', () => {
    let component: OperatorTabsComponent;
    let fixture: ComponentFixture<OperatorTabsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OperatorTabsComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OperatorTabsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
