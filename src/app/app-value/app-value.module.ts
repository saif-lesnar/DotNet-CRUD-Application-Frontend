import { BrowserModule } from '@angular/platform-browser';
import { AppValueService } from './app-value.services';
import { AppValueComponent } from './app-value.component';
import { NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [
        AppValueComponent
    ],
    imports : [
        HttpClientModule,
        BrowserModule
    ],
    entryComponents : [
        AppValueComponent
    ],
    exports : [
        AppValueComponent
    ],
    providers : [
        AppValueService
    ]
})

export class AppValueModule{

}