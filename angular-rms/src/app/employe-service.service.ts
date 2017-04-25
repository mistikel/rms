import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeServiceService {

  constructor(private http:Http) { }
  getHttp(){
         return this.http.get('http://localhost:8080/employees')
        .map(response=>{
            return response.json();
        });
    }

}
