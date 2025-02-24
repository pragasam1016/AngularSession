import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../model/EmployeeModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiURL : string;

  constructor(private httpClient : HttpClient) { }

  public getEmployees() : Observable<EmployeeModel[]>{
    this.apiURL = "https://localhost:7157/api/Employee";
    return this.httpClient.get<EmployeeModel[]>(this.apiURL);
  }

  public saveEmployees(emp : EmployeeModel ): Observable<boolean>{
    this.apiURL="https://localhost:7157/api/Employee";
    return this.httpClient.post<boolean>(this.apiURL,emp);
  }

}
