import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class ErrorSnackBarService {
    constructor(private readonly snackBar: MatSnackBar) {}

    openSnackBarError(message: number): void {
        let mes: string;

        switch (message) {
            case 404:
                mes = 'По данному URL ничего не найдено — данные не существуют!';
                break;
            default:
                mes = 'Undefined!';
                break;
        }
        this.snackBar.open(mes, 'x', {
            duration: 5000,
            verticalPosition: 'top',
        });
    }
}
