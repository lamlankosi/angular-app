import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community'

@Component({
    selector: 'app-ag-grid',
    standalone:false,
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css'
})
export class AgGridComponent {
    colDefs: ColDef[] = [
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" },
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000, electic: false },
        { make: 'Ford', model: 'Mondeo', price: 32000, electric:false},
        { make: 'Porsche', model: 'Boxster', price: 72000, electric: true }
    ];
}
