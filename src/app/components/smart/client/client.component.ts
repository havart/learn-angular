import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ClientInfoService} from '../../../services/clientInfoService/client-info.service';
import {IClient} from '../../../interfaces/client.interface';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientComponent implements OnInit {
  client$: Observable<IClient>;
  id: string;
  birth: Date;

  constructor(private clientInfoService: ClientInfoService) {
  }

  ngOnInit() {
    this.id = '5';
    this.client$ = this.clientInfoService.getById(this.id).pipe(
      tap(el => (this.birth = parseInt((new Date() - new Date(el.age)) / 3.154e10 / 1000 / 60 / 60 / 24 / 30, 10))),
    );
  }
}
