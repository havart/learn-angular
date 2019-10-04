import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentComponent } from './comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { mainReducers } from '../../../store/reducers/main.reduce';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ClientEffects } from '../../../store/effects/client.effect';
import { CommentEffects } from '../../../store/effects/comment.effects';
import { LaborActivityEffects } from '../../../store/effects/labor-activity.effect';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocalStorageService } from '../../../services/local-storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export class MockUserService {
    user = { username: 'Test User' };

    getUser(): string {
        return this.user.username;
    }
}

describe('CommentComponent', () => {
    let component: CommentComponent;
    let fixture: ComponentFixture<CommentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommentComponent],
            providers: [{ provide: LocalStorageService, useClass: MockUserService }],
            imports: [
                FormsModule,
                BrowserModule,
                MatInputModule,
                BrowserAnimationsModule,
                ReactiveFormsModule,
                MatCardModule,
                HttpClientTestingModule,
                MatSnackBarModule,
                MatToolbarModule,
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
        fixture = TestBed.createComponent(CommentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
