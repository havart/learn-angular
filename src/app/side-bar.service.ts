import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class SideBarService {
    public sideWorks$ = new Subject();

    constructor() {}
}
