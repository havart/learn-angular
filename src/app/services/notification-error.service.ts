import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root',
})
export class NotificationErrorService {
    constructor(private snackBar: MatSnackBar) {}

    openSnackBarError(message: string): void {
        this.snackBar.open(message, 'x', {
            duration: 3000,
            verticalPosition: 'top',
        });
    }
}
