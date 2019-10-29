import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'app-register',
    templateUrl : 'register.component.html',
    styleUrls : ['register.component.css']
})

export class RegisterComponent implements OnInit{
    model : any = {};
    @Input() valueList: any;
    @Output() cancelRegistration = new EventEmitter;
    constructor(private authService : AuthService) {} 
    ngOnInit(){

    }
    register(){
        console.log(this.model);
        this.authService.register(this.model).subscribe(response =>{

        },error =>{
            console.log("Failed to register");
        });
    }
    cancel(){
        this.cancelRegistration.emit(false);
    }
}