import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SideBarService } from '../../../services/side-bar.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
    selector: 'app-tool-bar-operator',
    templateUrl: './tool-bar-operator.component.html',
    styleUrls: ['./tool-bar-operator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolBarOperatorComponent implements OnInit {
    private sideWorks = false;
    private userName: string;

    constructor(private sideBarService: SideBarService, private localStorageService: LocalStorageService) {}

    ngOnInit() {
        this.userName = this.localStorageService.getUser()['username'];
    }

    sideBarToggle(): void {
        this.sideWorks = !this.sideWorks;
        this.sideBarService.sideWorks$.next(this.sideWorks);
    }
}
