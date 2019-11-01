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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
        MatSidenavModule,
        MatListModule,
        MatSnackBarModule,
    ],
    exports: [
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatSnackBarModule,
    ],
    providers: [],
})
export class MaterialModule {}
