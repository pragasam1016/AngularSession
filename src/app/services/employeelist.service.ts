import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmployeeModel } from '../model/EmployeeModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeelistService {

  public tempEmployee : EmployeeModel[];
  private employeeListData = new BehaviorSubject<EmployeeModel[]>(null);

  public employeeListDataSubject$ = this.employeeListData.asObservable();

  constructor() { }

  public setEmployeeListData(emp : EmployeeModel[]){
    this.employeeListData.next(emp);
    this.tempEmployee = emp;
  }

}
