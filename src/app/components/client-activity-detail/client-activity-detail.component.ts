import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientActivityInterface } from 'src/app/interfaces/client-activity.interface';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../../services/activity.service';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-client-activity-detail',
    templateUrl: './client-activity-detail.component.html',
    styleUrls: ['./client-activity-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientActivityDetailComponent implements OnInit {
    public client$: Observable<ClientActivityInterface>;

    constructor(private readonly route: ActivatedRoute, private readonly activityService: ActivityService) {}

    ngOnInit(): void {
        this.client$ = this.route.paramMap.pipe(
            switchMap(params => this.activityService.fetchClientActivity$(params.get('id'))),
        );
    }
}
