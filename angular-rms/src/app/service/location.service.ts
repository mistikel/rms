import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Location } from "../model/location.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocationService{
    
    constructor(private http:Http){}

    get(): Observable<Location[]>{
        let url = "/api/locations";
        return this.http.get(url)
        .map(response=>response.json());
    }
}