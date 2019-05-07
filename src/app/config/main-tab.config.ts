import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MainTabConfig {
    public static readonly VALIDATION = 'Валидация';
    public static readonly INITIALIZATION = 'Инициализация';
    public static readonly WORK = 'Трудовая деятельность';
    public get TABS(): string[] {
        return [MainTabConfig.VALIDATION, MainTabConfig.INITIALIZATION, MainTabConfig.WORK];
    }
}
