import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-tab',
    templateUrl: './main-tab.component.html',
    styleUrls: ['./main-tab.component.scss'],
})
export class MainTabComponent implements OnInit {
    VALIDATION = 'Валидация';
    INITIALIZATION = 'Инициализация';
    WORK = 'Трудовая деятельность';
    constructor() {}

    ngOnInit() {}
}
