import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'nav-bar',
    templateUrl : 'nav-bar.component.html',
    styleUrls : ['nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
    model: any = {};
    userName : any;
    constructor( private authService : AuthService){

    }
    ngOnInit(){
        this.userName = this.authService.userInfo()['unique_name'] ? this.authService.userInfo()['unique_name'] : '';
    }
    login(){
        console.log(this.model);
        this.authService.login(this.model).subscribe(next =>{
            console.log("login success");
        },error =>{
            console.log("Failed to login");
        })
    }
    loggedIn(){
        return this.authService.isLoggedIn();
    }
    logout(){
        localStorage.removeItem('token');
        console.log('Logged Out');
    }
}