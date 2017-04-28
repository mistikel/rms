import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Employee } from '../model/employee.model';
import { Location } from "../model/location.model";
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

  postOrUpdate(employee : Employee, empId): Observable<Employee>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if(empId != "add" || empId != null){
      console.log(JSON.stringify(employee));
      let url = "/api/employees" + employee.empId;
      return this.http.put(url,JSON.stringify(employee),{headers:headers})
              .map(response => response.json());
    }
    else{
      let url = "/api/employees";
      return this.http.post(url, JSON.stringify(employee), {headers:headers})
              .map(response => response.json());
    }
  }
}