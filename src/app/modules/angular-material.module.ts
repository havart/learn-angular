import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatSidenavModule,
        MatMenuModule,
        MatIconModule,
    ],
    exports: [
        MatInputModule,
        MatCardModule,
        MatListModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
    ],
    providers: [],
})
export class MaterialModule {}
