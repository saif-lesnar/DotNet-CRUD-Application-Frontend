import { HttpClient } from "@angular/common/http";
import { Injectable} from '@angular/core';
@Injectable()
export class HomeService {
    constructor( private http: HttpClient){

    }
    getValue(){
        return this.http.get('https://localhost:44350/api/values').pipe(response =>{
           return response;
        })
    }
}