import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactTabEnum } from './contact-tab.enum';
import { ContactTabService } from '../../../services/contact-tab.service';
import { Observable } from 'rxjs';
import { ContactTabInterface } from '../../../interfaces/contact-tab.interface';

@Component({
    selector: 'app-contact-tab',
    templateUrl: './contact-tab.component.html',
    styleUrls: ['./contact-tab.component.scss'],
})
export class ContactTabComponent implements OnInit {
    public informationList$: Observable<ContactTabInterface[]>;

    constructor(private contactTabService: ContactTabService) {
    }

    ngOnInit() {
        this.getInformationFromServer();
    }

    submit() {}

    getInformationFromServer(): void {
        this.informationList$ = this.contactTabService.getInformationFromServer$();
    }
}
