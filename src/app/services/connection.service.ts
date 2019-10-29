import { BehaviorSubject } from 'rxjs';
import { ClientInterface } from '../interfaces/client.interface';

export class ConnectionService {

  private client = new BehaviorSubject<ClientInterface>(null);
  currentСlient = this.client.asObservable();

  setClient(client: ClientInterface) {
    this.client.next(client);
  }
}