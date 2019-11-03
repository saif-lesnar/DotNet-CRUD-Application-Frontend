import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { Component, OnInit } from '@angular/core';
@Component({
    selector : 'app-member',
    templateUrl : 'members.component.html'
})
export class MemberComponent implements OnInit{
    ngOnInit(): void {
        this.loadUsers();
    }
    users : User[];
    /**
     *
     */
    constructor( private userService : UserService) {
    }
    loadUsers(){
        debugger;
        this.userService.getUsers().subscribe((users : User[]) => {
            this.users = users;
        }, error => {
            console.log('Error in load user');
        });
    }
}