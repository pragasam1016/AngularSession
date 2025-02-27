import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../model/EmployeeModel';
import { EmployeelistService } from '../services/employeelist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeelist',
  imports: [CommonModule],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent implements OnInit {
public employeeList : EmployeeModel[];

constructor(private employeelistService : EmployeelistService){
  debugger
}

  ngOnInit(): void {
    // this.employeelistService.employeeListDataSubject$.subscribe(x => this.employeeList = x);
    this.employeeList = this.employeelistService.tempEmployee;
  }



}
