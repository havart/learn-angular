import {
    BAD_REQUEST,
    BAD_GATEWAY,
    FORBIDDEN,
    GATEWAY_TIMEOUT,
    INTERNAL_SERVER_ERROR,
    NOT_FOUND,
    REQUEST_URL_TOO_LONG,
    SERVICE_UNAVAILABLE,
    UNAUTHORIZED,
} from '../constants/server-response.constants';

export const serverResponseMessages = {
    [BAD_REQUEST]: 'Запрос не может быть исполнен ввиду синтаксической ошибки.',
    [UNAUTHORIZED]: 'Для получения запрашиваемого ресурса нужна аутентификация.',
    [FORBIDDEN]: 'Нет прав доступа к содержимому запроса.',
    [NOT_FOUND]: 'По данному URL ничего не найдено — данные не существуют.',
    [REQUEST_URL_TOO_LONG]: 'Сервер не может обработать запрос из-за слишком длинного указанного URI.',
    [INTERNAL_SERVER_ERROR]: 'Ошибка сервера.',
    [BAD_GATEWAY]: 'Ошибка шлюза.',
    [SERVICE_UNAVAILABLE]: 'Сервер временно не может обрабатывать запросы по техническим причинам.',
    [GATEWAY_TIMEOUT]: 'Недействительный (недопустимый) ответ сервера.',
    OTHER_MESSAGE: 'Undefined!',
};
