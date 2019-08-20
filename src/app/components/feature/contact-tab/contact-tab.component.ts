import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ContactTabService } from '../../../services/contact-tab.service';
import { Observable } from 'rxjs';
import { ContactTabInterface } from '../../../interfaces/contact-tab.interface';

@Component({
    selector: 'app-contact-tab',
    templateUrl: './contact-tab.component.html',
    styleUrls: ['./contact-tab.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactTabComponent implements OnInit {
    public informationList$: Observable<ContactTabInterface[]>;

    constructor(private contactTabService: ContactTabService) {}

    ngOnInit(): void {
        this.getInformationFromServer();
    }

    getInformationFromServer(): void {
        this.informationList$ = this.contactTabService.getInformationFromServer$();
    }
}
