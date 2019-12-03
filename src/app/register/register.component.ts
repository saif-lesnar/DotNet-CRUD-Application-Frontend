import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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
    constructor(private authService : AuthService, 
        private fb : FormBuilder) {} 
    ngOnInit(){
        this.createRegisterForm();
    }
    createRegisterForm(){
        this.registerForm = this.fb.group({
            username : ['', Validators.required],
            password : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(9)]],
            confirmPassword : ['' , Validators.required],
            gender : ['male'],
            knownAs : ['', Validators.required],
            dateOfBirth : [null, Validators.required],
            city : ['', Validators.required],
            country : ['', Validators.required]
        },{
            validators: this.passMatchValidator
        })
    }
    passMatchValidator(g : FormGroup){
        debugger;
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