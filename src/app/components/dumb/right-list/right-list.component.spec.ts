import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightListComponent } from './right-list.component';
import { CommentComponent } from '../comment/comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatCardModule,
    MatFormFieldControl,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
} from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { mainReducers } from '../../../store/reducers/main.reduce';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ClientEffects } from '../../../store/effects/client.effect';
import { CommentEffects } from '../../../store/effects/comment.effects';
import { LaborActivityEffects } from '../../../store/effects/labor-activity.effect';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalStorageService } from '../../../services/local-storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export class MockUserService {
    user = { username: 'Test User' };

    getUser(): string {
        return this.user.username;
    }
}

describe('RightListComponent', () => {
    let component: RightListComponent;
    let fixture: ComponentFixture<RightListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: LocalStorageService, useClass: MockUserService }],
            imports: [
                ReactiveFormsModule,
                FormsModule,
                MatInputModule,
                MatCardModule,
                BrowserAnimationsModule,
                HttpClientTestingModule,
                MatSnackBarModule,
                StoreModule.forRoot(mainReducers),
                StoreDevtoolsModule.instrument({
                    maxAge: 50,
                }),
                EffectsModule.forRoot([ClientEffects, CommentEffects, LaborActivityEffects]),
                RouterTestingModule,
            ],
            declarations: [RightListComponent, CommentComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RightListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
