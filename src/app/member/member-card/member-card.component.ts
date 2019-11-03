import { User } from './../../_models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector : 'member-card',
    templateUrl : 'member-card.component.html'
})
export class MemberCardComponent implements OnInit{
    @Input() user : User ;
    ngOnInit(): void {
        
    }

}