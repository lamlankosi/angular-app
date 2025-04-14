import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialComponent } from './material/material.component';
import { MaterialModule } from './material/material.module';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';
    



@NgModule({
    declarations: [
        AppComponent,
        MaterialComponent,
        AgGridComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AgGridModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
