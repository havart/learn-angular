import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { GetTaskService } from '../../services/get-task.service';
import { getRandomId } from '../../helpers/get-random-id';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {

  constructor( private getTaskService: GetTaskService) { }

  getTask() {
    const id = getRandomId(1, 20);
    this.getTaskService.getClient(id).subscribe(
      respond => {
        console.log(respond);
      },
      (error: HttpErrorResponse) => {
        console.log(`No data found with id=${id}.`, error);
      }
    );
  }
}
