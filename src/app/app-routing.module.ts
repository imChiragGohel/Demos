import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormArrayComponent } from './form-array/form-array.component';
import { DynamicTablesComponent } from './dynamic-tables/dynamic-tables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignalsComponent } from './signals/signals.component';
import { TicTacComponent } from './tic-tac/tic-tac.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'formarray', component: FormArrayComponent
  },
  {
    path: 'tables', component: DynamicTablesComponent
  },
  {
    path: 'signals', component: SignalsComponent
  },
  {
    path: 'tictac', component: TicTacComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
