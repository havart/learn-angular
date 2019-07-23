import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarOperatorComponent } from './side-bar-operator.component';

describe('SideBarOperatorComponent', () => {
    let component: SideBarOperatorComponent;
    let fixture: ComponentFixture<SideBarOperatorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SideBarOperatorComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideBarOperatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
