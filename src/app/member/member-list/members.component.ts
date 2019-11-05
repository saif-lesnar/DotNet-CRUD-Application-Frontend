import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector : 'app-member',
    templateUrl : 'members.component.html'
})
export class MemberComponent implements OnInit{
    ngOnInit(){
        this.loadUsers();
    }
    users : User[];
    /**
     *
     */
    constructor( private userService : UserService,
        private route : ActivatedRoute) {
    }
    loadUsers(){
        this.route.data.subscribe(data =>{
            this.users = data['users'];
        });
    }
}