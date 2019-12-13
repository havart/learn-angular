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
    MatProgressSpinnerModule,
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
    MatProgressSpinnerModule,
];

@NgModule({
    declarations: [],
    imports: MODULES,
    exports: MODULES,
    providers: [],
})
export class MaterialModule {}
