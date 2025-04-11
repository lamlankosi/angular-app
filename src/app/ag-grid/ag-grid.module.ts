import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './ag-grid.component';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';



@NgModule({
    declarations: [AgGridComponent],
  imports: [
      CommonModule,
      AgGridModule
  ]
})
export class AgGridvModule { }
