import { UserService } from './../../_services/user.service';
import { User } from './../../_models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector : 'member-detail',
    templateUrl : 'member-detail.component.html',
    styleUrls : ['member-detail.component.css']
})
export class MemberDetailComponent implements OnInit{
    user : User;
    /**
     *
     */
    constructor(private userService : UserService,
        private route : ActivatedRoute) {
        
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.user = data['user'];
        })
    }
    // loadUser(){
    //     this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user : User) => {
    //         this.user = user;
    //     }, error =>{
    //         console.log("Error in getting member detail");
    //     });
    // }

}