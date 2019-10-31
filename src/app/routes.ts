import { AuthGuard } from './_feature-guard/auth.guard';
import { MessageComponent } from './messages/messages.component';
import { MemberComponent } from './member/members.component';
import { ListComponent } from './lists/list.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path : '', component : HomeComponent },
    {path: '',
        runGuardsAndResolvers : 'always',
        canActivate : [AuthGuard],
        children : [
            {path : 'list', component : ListComponent ,canActivate:[AuthGuard]},
            {path : 'member', component : MemberComponent, canActivate:[AuthGuard]},
            {path : 'message', component : MessageComponent, canActivate:[AuthGuard]}
        ]
    },
    {path : '**', redirectTo : '' , pathMatch : 'full'},
];