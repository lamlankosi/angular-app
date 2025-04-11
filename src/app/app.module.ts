import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import { MaterialModule } from './material/material.module';




@NgModule({
    declarations: [
        AppComponent,
        MaterialComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
       
    ],
    exports:[]
})

export class AppModule {

}