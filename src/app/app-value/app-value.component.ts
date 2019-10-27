import { AppValueService } from './app-value.services';
import { Component } from '@angular/core';

@Component({
    selector : 'app-value',
    templateUrl : 'app-value.component.html'
})
export class AppValueComponent{
    value : any;
    constructor(private appservice : AppValueService){
    }
    ngOnInit(){
        this.getValue();
    }
    getValue(){
        debugger;
        this.appservice.getValue().subscribe(response => {
            this.value = response? response : [];
        });
       
    }
}