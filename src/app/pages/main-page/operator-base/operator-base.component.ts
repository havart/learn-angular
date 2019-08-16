import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CONTACT } from '../../../constants/path.constans';

@Component({
    selector: 'app-operator-base',
    templateUrl: './operator-base.component.html',
    styleUrls: ['./operator-base.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OperatorBaseComponent {
    private contact = CONTACT;
}
