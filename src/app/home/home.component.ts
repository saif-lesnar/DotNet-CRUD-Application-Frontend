import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-home',
    templateUrl : 'home.component.html',
    styleUrls : ['home.component.css']
})
export class HomeComponent implements OnInit{
    constructor(){

    }
    value : any;
    regMode : boolean = false;
    ngOnInit(){

    }
    
    registerToggle(){
        this.regMode = true;
    }

    cancelRegistration(val : boolean){
        this.regMode = false;
    }
}