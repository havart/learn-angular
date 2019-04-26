import { Component, OnInit } from '@angular/core';
import { ClientInfoService } from '../../../services/clientInfoService/client-info.service';

export interface Client {
    id: string;
    createdAt: string;
    firstName: string;
    lastName: string;
    age: string;
    address: string;
    city: string;
    avatar: string;
    session: number;
    customerId: string;
}
@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
    client: Client[] = [];
    url = 'http://5bfff0a00296210013dc7e82.mockapi.io/test/user-info/';
    id: string;
    constructor(private clientInfoService: ClientInfoService) {}

    ngOnInit() {
        this.id = '2';
        this.clientInfoService.get(this.url, this.id).subscribe(
            (value: Client[]) => {
                this.client = value;
            },
            error => {
                console.log(error);
            },
        );
    }
}
