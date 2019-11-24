import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector : 'app-register',
    templateUrl : 'register.component.html',
    styleUrls : ['register.component.css']
})

export class RegisterComponent implements OnInit{
    model : any = {};
    @Input() valueList: any;
    @Output() cancelRegistration = new EventEmitter;
    registerForm : FormGroup;
    constructor(private authService : AuthService) {} 
    ngOnInit(){
        this.registerForm = new FormGroup({
            username : new FormControl('Hello', Validators.required),
            password : new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(9)]),
            confirmPassword : new FormControl('', Validators.required)
        }, this.passMatchValidator);
    }
    passMatchValidator(g : FormGroup){
        return g.get('password').value == g.get('confirmPassword').value? null : {'mismatch' : true}
    }
    register(){
        console.log(this.registerForm.value);
        // this.authService.register(this.model).subscribe(response =>{

        // },error =>{
        //     console.log("Failed to register");
        // });
    }
    cancel(){
        this.cancelRegistration.emit(false);
    }
}