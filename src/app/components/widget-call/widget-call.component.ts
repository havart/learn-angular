import { Component, OnInit } from '@angular/core';
import { CallService } from '../../services/call.service';
import { Observable, timer } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { getRandomIdHelper } from '../../helpers/get-random-id.helper';

@Component({
    selector: 'app-widget-call',
    templateUrl: './widget-call.component.html',
    styleUrls: ['./widget-call.component.scss'],
})
export class WidgetCallComponent implements OnInit {
    public startCall$: Observable<boolean>;
    public client$: Observable<any>;
    public delayNumber = false;
    public isConnected = false;
    public isErrorConnection = false;
    public counter = 60;
    public interval = 1000;
    constructor(private readonly callService: CallService) {}

    ngOnInit(): void {
        this.startCall$ = this.callService.getCallStatus$().pipe(
            map(({isCall}) => {
                 console.log(isCall);
                // this.delayNumber = res;
                this.isConnected = false;
                setTimeout(() => {
                this.delayNumber = false;
                this.isConnected = true;
            }, 2000);

            return isCall;
        }));

        this.client$ = this.callService.client$().pipe(map(res => res));
    }

    private connectClient(): boolean {
        const randomNumber = getRandomIdHelper(1, 20);

        return randomNumber < 20 ? this.isConnected = true : this.isErrorConnection = true;
    }

    public endCall() {
        this.callService.setCallStatus(false);
        this.isConnected = false;
    }

    
}
