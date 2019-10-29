import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-home',
    templateUrl : 'home.component.html',
    styleUrls : ['home.component.css']
})
export class HomeComponent implements OnInit{
    constructor(private homeService : HomeService ){

    }
    value : any;
    regMode : boolean = false;
    ngOnInit(){
        this.getValue();
    }
    
    registerToggle(){
        this.regMode = true;
    }
    getValue(){
        this.homeService.getValue().subscribe(response => {
            this.value = response? response : [];
        });
    }
    cancelRegistration(val : boolean){
        this.regMode = false;
    }
}