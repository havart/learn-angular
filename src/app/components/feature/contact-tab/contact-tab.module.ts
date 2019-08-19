import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactTabComponent } from './contact-tab.component';
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from '../../smart/contact/contact.component';

const routes: Routes = [
  { path: '', component: ContactTabComponent,  pathMatch: 'full'},
];

@NgModule({
    declarations: [ContactTabComponent, ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ContactTabModule {}
