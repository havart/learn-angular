import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoClientComponent } from './info-client.component';
import { InfoLaborActivityClientComponent } from '../info-labor-activity-client/info-labor-activity-client.component';
import { StoreModule } from '@ngrx/store';
import { mainReducers } from '../../../store/reducers/main.reduce';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ClientEffects } from '../../../store/effects/client.effect';
import { CommentEffects } from '../../../store/effects/comment.effects';
import { LaborActivityEffects } from '../../../store/effects/labor-activity.effect';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('InfoClientComponent', () => {
    let component: InfoClientComponent;
    let fixture: ComponentFixture<InfoClientComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InfoClientComponent, InfoLaborActivityClientComponent],
            imports: [
                CommonModule,
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
        fixture = TestBed.createComponent(InfoClientComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
