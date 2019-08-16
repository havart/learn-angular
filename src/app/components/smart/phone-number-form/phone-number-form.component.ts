import { Component, Input, OnInit } from '@angular/core';
import { ContactTabInterface } from '../../../interfaces/contact-tab.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-phone-number-form',
  templateUrl: './phone-number-form.component.html',
  styleUrls: ['./phone-number-form.component.scss']
})
export class PhoneNumberFormComponent implements OnInit {
  @Input() contactForm: FormGroup;
  @Input() contact: ContactTabInterface;
  private callStatus: boolean;

  constructor() { }

  ngOnInit() {
  }

  private toggleCall(contact): void {
    console.log(`calling at *number* ${contact}`);
    this.callStatus = !this.callStatus;
  }

}
