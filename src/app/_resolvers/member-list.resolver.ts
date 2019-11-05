import { UserService } from './../_services/user.service';
import { User } from './../_models/user';
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class MemberListResolver implements Resolve<User[]>{

    constructor(private userService : UserService, 
        private router : Router) {
        
    }
    resolve(route:ActivatedRouteSnapshot) : Observable<User[]> {
        return this.userService.getUsers().pipe(
            catchError(error =>{
                console.log('Error in get Users');
                this.router.navigate(['/home']);
                return of(null);
            })
        )
    }
}