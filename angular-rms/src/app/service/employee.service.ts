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
  post(employee: Employee){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = "/api/employees";
      return this.http.post(url, JSON.stringify(employee), {headers:headers})
              .map(response => response.json());
  }

  put(employee : Employee, empId): Observable<Employee>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');      
    let url = "/api/employees/" + employee.empId;      
    return this.http.put(url,JSON.stringify(employee),{headers:headers})
              .map(response => response.json());

  }
  delete(empId){
     let url = "/api/employees/" + empId;
    return this.http.delete(url)
      .map(response => {
        if (response != null) {
          return;
        } else {
          return null
        }
      });
  }

  getSortEmployee(sort): Observable<Employee[]>{
    let url = "/api/employees/sort";
    let params = new URLSearchParams();
    params.append('sort', sort);
    return this.http.get(url, {search : params})
    .map(response=>response.json());
  }

  getByName(name): Observable<Employee[]>{
    let url = "/api/employees/search";
    let params = new URLSearchParams();
    params.append('name', name);
    return this.http.get(url,{search : params})
      .map(response => response.json());
  }

  filterAll(location,gender): Observable<Employee[]>{
    let url = "/api/employees/filterAll";
    let params = new URLSearchParams();
    params.append('location', location);
    params.append('gender', gender);
    return this.http.get(url,{search : params})
      .map(response => response.json());
  }

  filterByLocation(location): Observable<Employee[]>{
    let url = "/api/employees/filterLocation";
    let params = new URLSearchParams();
    params.append('location', location);
    return this.http.get(url,{search : params})
      .map(response => response.json());
  }

  filterByGender(gender): Observable<Employee[]>{
    let url = "/api/employees/filterGender";
    let params = new URLSearchParams();
    params.append('gender', gender);
    return this.http.get(url,{search : params})
      .map(response => response.json());
  }
}