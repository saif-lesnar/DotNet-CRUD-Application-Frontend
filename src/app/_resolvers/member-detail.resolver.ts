import { UserService } from './../_services/user.service';
import { User } from './../_models/user';
import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class MemberDetailResolver implements Resolve<User>{
    /**
     *
     */
    constructor(private userService : UserService,
        private router : Router) {
        
    }
    resolve(route: ActivatedRouteSnapshot) : Observable<User> {
        return this.userService.getUser(route.params['id']).pipe(
            catchError(error =>{
                console.log("error retriving data form resolver");
                this.router.navigate(['/members']);
                return of(null);
            })
        )
    }

}