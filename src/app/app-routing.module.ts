import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OperatorBaseComponent} from './operator-base/operator-base.component';
import {OperatorBaseGuard} from './operator-base.guard';

const routes: Routes = [
  { path: 'operator', component: OperatorBaseComponent, canActivate: [OperatorBaseGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
