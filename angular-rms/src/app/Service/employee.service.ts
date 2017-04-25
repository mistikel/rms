import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Employee } from "app/Model/employe.model";

@Injectable()
export class EmployeService {
 
 private employee: Employee;
 
  constructor(private http:Http) { }
  get(): Observable<Employee[]> {
    let url = "/api/employees/";
    return this.http.get(url)
      .map(response => response.json());
  }

}
