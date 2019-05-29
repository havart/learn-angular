import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MainTabConfig {
    public static readonly EMPLOYMENT = [
        'Кастелян',
        'Министр',
        'Диктатор',
        'Глава государства',
        'Креативный директор',
        'Директор',
    ];

    public get EMPLOYMENTS(): string[] {
        return MainTabConfig.EMPLOYMENT;
    }
}
