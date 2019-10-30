import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn:'root'
})

export class AuthService{
    baseUrl = 'https://localhost:44350/api/auth/';
    jwtHelper = new JwtHelperService();
    decodedToken : any;
    constructor(private http : HttpClient){

    }
    login(model : any){
        return this.http.post(this.baseUrl+'login',model).pipe(map(response =>{
            const user = response;
            if(user){
                localStorage.setItem('token', user['token']);
            }
        }))
    }
    register(model:any){
        return this.http.post(this.baseUrl+'register', model).pipe(map(response=>{
            const user = response;
            if (user){
                ///localStorage.setItem('token')
            }
        }))
    }
    userInfo(){
        this.decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
        return this.decodedToken;
    }
    isLoggedIn(){
        const token = localStorage.getItem('token');
        return this.jwtHelper.isTokenExpired(token);
    }
}