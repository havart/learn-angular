import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class ErrorSnackBarService {
    constructor(private readonly snackBar: MatSnackBar) {}

    openSnackBarError(message: string): void {
        this.snackBar.open(message, 'x', {
            duration: 5000,
            verticalPosition: 'top',
        });
    }
}