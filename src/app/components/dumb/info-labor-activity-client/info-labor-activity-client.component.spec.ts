import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLaborActivityClientComponent } from './info-labor-activity-client.component';
import { StoreModule } from '@ngrx/store';
import { mainReducers } from '../../../store/reducers/main.reduce';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ClientEffects } from '../../../store/effects/client.effect';
import { CommentEffects } from '../../../store/effects/comment.effects';
import { LaborActivityEffects } from '../../../store/effects/labor-activity.effect';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material';

describe('InfoLaborActivityClient', () => {
    let component: InfoLaborActivityClientComponent;
    let fixture: ComponentFixture<InfoLaborActivityClientComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InfoLaborActivityClientComponent],
            imports: [
                HttpClientTestingModule,
                MatSnackBarModule,
                StoreModule.forRoot(mainReducers),
                StoreDevtoolsModule.instrument({
                    maxAge: 50,
                }),
                EffectsModule.forRoot([ClientEffects, CommentEffects, LaborActivityEffects]),
                RouterTestingModule,
            ],
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
