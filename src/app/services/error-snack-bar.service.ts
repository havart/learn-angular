import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    BAD_GATEWAY,
    BAD_REQUEST,
    FORBIDDEN,
    GATEWAY_TIMEOUT,
    INTERNAL_SERVER_ERROR,
    NOT_FOUND,
    REQUEST_URL_TOO_LONG,
    SERVICE_UNAVAILABLE,
    UNAUTHORIZED,
} from '../constants/server-response.constants';

@Injectable({
    providedIn: 'root',
})
export class ErrorSnackBarService {
    constructor(private readonly snackBar: MatSnackBar) {}

    openSnackBarError(message: number): void {
        let mes: string;

        switch (message) {
            case BAD_REQUEST:
                mes = 'Запрос не может быть исполнен ввиду синтаксической ошибки.';
                break;
            case UNAUTHORIZED:
                mes = 'Для получения запрашиваемого ресурса нужна аутентификация.';
                break;
            case FORBIDDEN:
                mes = 'Нет прав доступа к содержимому запроса.';
                break;
            case NOT_FOUND:
                mes = 'По данному URL ничего не найдено — данные не существуют.';
                break;
            case REQUEST_URL_TOO_LONG:
                mes = 'Сервер не может обработать запрос из-за слишком длинного указанного URI.';
                break;
            case INTERNAL_SERVER_ERROR:
                mes = 'Ошибка сервера.';
                break;
            case BAD_GATEWAY:
                mes = 'Ошибка шлюза.';
                break;
            case SERVICE_UNAVAILABLE:
                mes = 'Сервер временно не может обрабатывать запросы по техническим причинам.';
                break;
            case GATEWAY_TIMEOUT:
                mes = 'Недействительный (недопустимый) ответ сервера.';
                break;
            default:
                mes = 'Undefined!';
                break;
        }

        this.snackBar.open(mes, 'x', {
            duration: 6000,
            verticalPosition: 'top',
        });
    }
}
