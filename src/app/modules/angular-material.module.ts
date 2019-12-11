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
    MatExpansionModule,
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
    MatExpansionModule,
];

@NgModule({
    declarations: [],
    imports: MODULES,
    exports: MODULES,
    providers: [],
})
export class MaterialModule {}
