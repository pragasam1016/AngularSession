import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryRoutingModule } from './salary.routes';
import { PfComponent } from './pf/pf.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SalaryRoutingModule,
    PfComponent
  ]
})
export class SalaryModule { }
