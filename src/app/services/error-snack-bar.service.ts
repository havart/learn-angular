import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { serverResponseMessages } from '../configs/server-response-messages.const';

@Injectable({
    providedIn: 'root',
})
export class ErrorSnackBarService {
    constructor(private readonly snackBar: MatSnackBar) {}

    openSnackBarError(message: number): void {
        let mes: string;
        mes = serverResponseMessages[message] || serverResponseMessages.OTHER_MESSAGE;

        this.snackBar.open(mes, 'x', {
            duration: 5000,
            verticalPosition: 'top',
        });
    }
}
