import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SideBarService {
    public sideWorks$ = new Subject<boolean>();

    constructor() {}
}
