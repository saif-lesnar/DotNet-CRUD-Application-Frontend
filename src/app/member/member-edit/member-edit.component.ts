import { User } from './../../_models/user';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector : 'member-edit',
    templateUrl : 'member-edit.component.html'
})
export class MemberEditComponent implements OnInit{
    /**
     *
     */
    @ViewChild('editForm', {static : true}) editForm: NgForm;
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
    updateUser(){
        console.log("edd" + this.user);
        this.editForm.reset(this.user);
    }
}