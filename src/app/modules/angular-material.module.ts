import { NgModule } from '@angular/core';
import {
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
    MatTabsModule,
    MatSelectModule,
} from '@angular/material';

const MODULES = [
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
    MatTabsModule,
    MatSelectModule,
];

@NgModule({
    declarations: [],
    imports: MODULES,
    exports: MODULES,
    providers: [],
})
export class MaterialModule {}
