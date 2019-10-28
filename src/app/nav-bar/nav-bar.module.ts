import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
    imports : [
        FormsModule,
        CommonModule
    ],
    declarations : [
        NavBarComponent
    ],
    entryComponents : [

    ],
    exports : [
        NavBarComponent
    ],
    providers : [

    ]
})

export class NavbarModule{

}