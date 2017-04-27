import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { SubDivision } from "../model/subdivision.model"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SubDivisionService{
    
    constructor(private http:Http){}

    get(): Observable<SubDivision[]>{
        let url = "/api/locations";
        return this.http.get(url)
        .map(response=>response.json());
    }
}