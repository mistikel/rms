import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Employee } from '../model/employee.model';
import { Location } from "../model/location.model";
import { Grade } from "../model/grade.model";
import { Division } from "../model/division.model";
import { SubDivision } from "../model/subdivision.model"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService{
    
    constructor(private http:Http){}

    get(): Observable<Employee[]>{
        let url = "/api/employees";
        return this.http.get(url)
        .map(response=>response.json());
    }

    getEmployeeById(empId): Observable<Employee> {
    let url = "/api/employees/" + empId;
    return this.http.get(url)
      .map(response => {
        if (response != null) {
          return response.json();
        } else {
          return null
        }
      });
  }
}