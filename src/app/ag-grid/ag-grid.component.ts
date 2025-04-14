import { Component } from "@angular/core";

import { AgGridAngular } from "ag-grid-angular";
import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data Interface
interface IRow {
    make: string;
    model: string;
    price: number;
    electric: boolean;
}


@Component({
    selector: 'app-ag-grid',
    standalone: true,
    imports: [AgGridAngular],
    templateUrl: './ag-grid.component.html',
})
export class AgGridComponent {
    rowData: IRow[] = [
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Chevrolet", model: "Bolt EV", price: 31995, electric: true },
        { make: "BMW", model: "i4", price: 52995, electric: true },
        { make: "Honda", model: "Civic", price: 25500, electric: false },
        { make: "Hyundai", model: "Ioniq 5", price: 44145, electric: true },
        { make: "Ram", model: "1500", price: 40200, electric: false },
        { make: "Volkswagen", model: "ID.4", price: 39995, electric: true },
        { make: "Subaru", model: "Outback", price: 28745, electric: false },
        { make: "Lucid", model: "Air", price: 77400, electric: true },
        { make: "Nissan", model: "Altima", price: 27200, electric: false },
        { make: "Rivian", model: "R1T", price: 73900, electric: true },
        { make: "Mercedes-Benz", model: "EQE", price: 76900, electric: true },
        { make: "Jeep", model: "Grand Cherokee", price: 41600, electric: false },
        { make: "Kia", model: "EV6", price: 48290, electric: true },
        { make: "Mazda", model: "CX-5", price: 29400, electric: false },
        { make: "Polestar", model: "2", price: 49900, electric: true },
        { make: "GMC", model: "Sierra 1500", price: 44400, electric: false },
        { make: "Audi", model: "Q4 e-tron", price: 53400, electric: true },
        { make: "Chrysler", model: "300", price: 33600, electric: false },
        { make: "Volvo", model: "XC40 Recharge", price: 53500, electric: true },
        { make: "Dodge", model: "Charger", price: 35995, electric: false }

    ];

    pagination = true;
    paginationPageSize = 10;
    paginationPageSizeSelector = [10, 20]

    rowClassRules = {
        'green-row': (p:any) => p.data.make == 'Tesla'
    }


    colDefs: ColDef<IRow>[] = [
        {
            //map values
            field: 'make',
            headerName: 'Brand',
            filter: true,
            floatingFilter: true,
            editable: true,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: { values: ['Tesla', 'Ford', 'Toyota']},
        },
        {
            field: "model",
            filter: true,
            floatingFilter: true,
            editable:true,
        },
        {
            field: "price",
            valueFormatter: p => `R${(p.value * 18.91).toLocaleString()}`,
            filter: true,
            floatingFilter: true,
            editable: true,
        },
        {
            field: "electric",
            filter: true,
            floatingFilter: true,
            editable: true,
            cellClassRules: {
                'green-cell': p => p.data?.electric == true
            }
        },
    ];
}
