import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Division } from "../model/division.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DivisionService{
    
    constructor(private http:Http){}

    get(): Observable<Division[]>{
        let url = "/api/divisions";
        return this.http.get(url)
        .map(response=>response.json());
    }
}