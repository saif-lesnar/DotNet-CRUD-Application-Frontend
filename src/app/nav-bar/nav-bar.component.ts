import { AuthService } from './../_services/auth.service';
import { Component } from '@angular/core';

@Component({
    selector : 'nav-bar',
    templateUrl : 'nav-bar.component.html',
    styleUrls : ['nav-bar.component.css']
})
export class NavBarComponent{
    model: any = {};
    constructor( private authService : AuthService){

    }
    login(){
        debugger;
        console.log(this.model);
        this.authService.login(this.model).subscribe(next =>{
            console.log("login success");
        },error =>{
            console.log("Failed to login");
        })
    }
    loggedIn(){
        const token = localStorage.getItem('token');
        return !!token;
    }
    logout(){
        localStorage.removeItem('token');
        console.log('Logged Out');
    }
}