import { Component } from '@angular/core';
import { GeneratorValue } from './services/generator-value.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-angular-change-detaction';
  ngOnInit(): void {
   const value = GeneratorValue.generateValue();
   console.log(value)
  }
  

}
