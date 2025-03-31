import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PfComponent } from '../pf/pf.component';

@Component({
  selector: 'app-salarydetails',
  templateUrl: './salarydetails.component.html',
  styleUrl: './salarydetails.component.css'
})
export class SalarydetailsComponent {

  constructor(private router:Router) { }

  pf(){
    this.router.navigate(['salary/pf']);
  }
}
