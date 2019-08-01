import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactTabComponent } from './contact-tab.component';
import { MatButtonModule, MatInputModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ContactTabComponent,  pathMatch: 'full'}
];

@NgModule({
  declarations: [ContactTabComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
})
export class ContactTabModule { }
