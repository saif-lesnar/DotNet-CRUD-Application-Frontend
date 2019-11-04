import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector : 'nav-bar',
    templateUrl : 'nav-bar.component.html',
    styleUrls : ['nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
    model: any = {};
    userName : any;
    constructor( private authService : AuthService,
        private router : Router){

    }
    ngOnInit(){
        this.getUserName();
    }
    getUserName(){
        this.userName = this.authService.userInfo() ? this.authService.userInfo()['unique_name'] : ' ';
    }
    login(){
        console.log(this.model);
        this.authService.login(this.model).subscribe(next =>{
            this.getUserName();
            console.log("login success");
        },error =>{
            console.log("Failed to login");
        }, ()=>{
            this.router.navigate(['/members']);
        })
    }
    loggedIn(){
        return this.authService.isLoggedIn();
    }
    logout(){
        localStorage.removeItem('token');
        console.log('Logged Out');
        this.router.navigate(['/home']);
    }
}