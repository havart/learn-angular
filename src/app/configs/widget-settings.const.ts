import { WidgetSettingsInterface } from '../interfaces/widget-settings.interface';

export const widgetSettings: Readonly<WidgetSettingsInterface> = {
    connectingTime: 2000,
    timerCount: 20,
    connectingMessage: `Идет набор номера...`,
    errorMessage: `Ошибка соеденения...`,
};
