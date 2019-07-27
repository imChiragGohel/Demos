import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DynamicTablesComponent } from './dynamic-tables/dynamic-tables.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignalsComponent } from './signals/signals.component';
import { TicTacComponent } from './tic-tac/tic-tac.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTablesComponent,
    FormArrayComponent,
    DashboardComponent,
    SignalsComponent,
    TicTacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
