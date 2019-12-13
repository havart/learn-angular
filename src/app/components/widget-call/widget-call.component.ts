import { Component, OnInit } from '@angular/core';
import { CallService } from '../../services/call.service';
import { Observable, of } from 'rxjs';
import { map, delay, tap } from 'rxjs/operators';
import { getRandomIdHelper } from '../../helpers/get-random-id.helper';

@Component({
    selector: 'app-widget-call',
    templateUrl: './widget-call.component.html',
    styleUrls: ['./widget-call.component.scss'],
})
export class WidgetCallComponent implements OnInit {
    public client$: Observable<any>;
    public delayNumber: boolean;
    public isConnected: boolean;
    public isErrorConnection: boolean;
    public isCall: boolean;
    constructor(private readonly callService: CallService) {}

    ngOnInit(): void {
        this.callService
            .getCallStatus$()
            .pipe(
                map(({ isCall, isDelay, callStarted, errorCall }) => {
                    this.isCall = isCall;
                    this.delayNumber = isDelay;
                    this.isConnected = callStarted;
                    this.isErrorConnection = errorCall;
                }),
                delay(2000),
                tap(() => {
                    if (this.delayNumber) {
                        this.callService.setCallStatus(false, 'isDelay');
                        this.connectClient();
                    }
                    if(this.isConnected) {
                        this.client$ = this.callService.client$().pipe(map(res => res));
                    } 
                    
                }),
            )
            .subscribe();
            
    }

    public endCall(): void {
        
        this.callService.setCallStatus(false, 'isCall');
        this.callService.setCallStatus(false, 'callStarted');
        this.callService.setCallStatus(false, 'errorCall');
        

    }

    private connectClient(): void {
        const randomNumber = getRandomIdHelper(1, 20);

        return randomNumber < 10
            ? this.callService.setCallStatus(true, 'callStarted')
            : this.callService.setCallStatus(true, 'errorCall');
    }
}
