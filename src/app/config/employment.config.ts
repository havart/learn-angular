import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class EmploymentsConfig {
   public EMPLOYMENTLIST: ReadonlyArray<string> = [
        'Кастелян',
        'Министр',
        'Диктатор',
        'Глава государства',
        'Креативный директор',
        'Директор',
    ];
}
