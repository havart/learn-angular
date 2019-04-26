import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/sidebarService/sidebar.service';

export interface Data {
    id: string;
    createdAt: string;
    name: string;
    comment: string;
    viewType: string;
    isComment: boolean;
}

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    url = 'http://5bfff0a00296210013dc7e82.mockapi.io/test/steps';
    data: Data[];

    constructor(private sBarService: SidebarService) {}

    ngOnInit() {
        this.sBarService.get(this.url).subscribe(
            (value: Data[]) => {
                this.data = value.filter(el => !el.isComment);
            },
            error => {
                console.log(error);
            },
        );
    }
}
