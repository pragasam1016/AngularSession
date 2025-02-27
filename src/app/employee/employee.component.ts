import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeModel } from '../model/EmployeeModel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeelistService } from '../services/employeelist.service';

@Component({
  selector: 'app-employee',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
public employee : EmployeeModel;

public employeeList : EmployeeModel[];

  constructor(private employeeService : EmployeeService,private employeelistService : EmployeelistService){
    this.employee = new EmployeeModel();
  }
  ngOnInit(): void {
    this.getEmployeeList();
  }

  public saveEmployee(){
    this.employeeService.saveEmployees(this.employee).subscribe(x =>{console.log(x);this.getEmployeeList()});
  }

  public getEmployeeList(){
    this.employeeService.getEmployees().subscribe(x => 
      {
        this.employeeList = x;
        this.employeelistService.setEmployeeListData(x);
      });
  }
}
