import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { AuthGuard } from './_feature-guard/auth.guard';
import { MessageComponent } from './messages/messages.component';
import { MemberComponent } from './member/member-list/members.component';
import { ListComponent } from './lists/list.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path : '', component : HomeComponent },
    {path: '',
        runGuardsAndResolvers : 'always',
        canActivate : [AuthGuard],
        children : [
            {path : 'list', component : ListComponent},
            {path : 'members', component : MemberComponent},
            {path : 'members/:id', component : MemberDetailComponent, resolve : {user : MemberDetailResolver}},
            {path : 'message', component : MessageComponent}
        ]
    },
    {path : '**', redirectTo : '' , pathMatch : 'full'},
];