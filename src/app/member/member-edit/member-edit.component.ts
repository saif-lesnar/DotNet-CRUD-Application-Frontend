import { User } from './../../_models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector : 'member-edit',
    templateUrl : 'member-edit.component.html'
})
export class MemberEditComponent implements OnInit{
    /**
     *
     */
    user : User;
    constructor( private route : ActivatedRoute) {
        
    }
    ngOnInit() {
        this.loadUserInfo()
    }
    loadUserInfo(){
        this.route.data.subscribe(data =>{
            this.user = data['user'];
        });
    }
}