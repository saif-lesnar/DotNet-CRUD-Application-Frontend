import { AuthService } from './../_services/auth.service';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class MemberEditResolver implements Resolve<User>{

    constructor(private userService : UserService,
        private authService : AuthService,
        private router : Router) {
    }
    resolve(route: ActivatedRouteSnapshot) : Observable<User> {
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
            catchError(error =>{
                console.log("error retriving data form resolver member edit");
                this.router.navigate(['/members/edit']);
                return of(null);
            })
        )
    }
}