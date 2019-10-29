import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
    ],
    exports: [
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
    ],
    providers: [],
})
export class MaterialModule {}
