import { AuthService } from './../../_services/auth.service';
import { User } from './../../_models/user';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';

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
    constructor( private route : ActivatedRoute,
        private userService : UserService,
        private authService : AuthService) {
        
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
        this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(response =>{
            console.log("Successfully updated");
            this.editForm.reset(this.user);
        }, error=>{
            console.log("Error updating user");
        })
    }
    updateMainPhoto(photoUrl){
        this.user['photoUrl'] = photoUrl;
    }
}