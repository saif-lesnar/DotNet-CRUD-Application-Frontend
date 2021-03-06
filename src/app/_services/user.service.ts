import { Photo } from './../_models/photo';
import { User } from './../_models/user';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class UserService{
    baseUrl = environment.apiUrl
    /**
     *
     */
    constructor(private http : HttpClient) {
    
    }
    getUsers() : Observable<User[]>{
        return this.http.get<User[]>(this.baseUrl+ 'user');
    }
    getUser(id) : Observable<User>{
        return this.http.get<User>(this.baseUrl+'user/'+ id );
    }
    updateUser(id : number, user : User){
        return this.http.put(this.baseUrl+'user/' + id, user);
    }
    setMainPhoto(userId : number, photoId : number){
        return this.http.post(this.baseUrl+'user/'+userId+ '/photos/'+photoId+'/setMain', {});
    }
    deletePhoto(userId : number, photoId : number){
        return this.http.delete(this.baseUrl+'user/'+userId+'/photos/'+photoId);
    }
}