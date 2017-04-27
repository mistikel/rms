import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Grade } from "../model/grade.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GradeService{
    
    constructor(private http:Http){}

    get(): Observable<Grade[]>{
        let url = "/api/grades";
        return this.http.get(url)
        .map(response=>response.json());
    }
}