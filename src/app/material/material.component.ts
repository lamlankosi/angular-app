import { Component } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { UclTeams } from '../interface/ucl-teams.component'


const teamData: UclTeams[] = [
    { position: 1, name: 'Hydrogen', points: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', points: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', points: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', points: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', points: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', points: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', points: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', points: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', points: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', points: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-material',
  standalone: true,
    templateUrl: './material.component.html',
    styleUrl: './material.component.css',
    imports: [MaterialModule, CommonModule, CdkTableModule]
})
export class MaterialComponent {
    selectFavourites = new FormControl();
    uclTeams: string[] = ['Arsenal', 'Barcelona', 'Paris Saint German', 'Real Madrid']


    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.uclTeams, event.previousIndex, event.currentIndex);
    }



    //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    //dataSource = new ExampleDataSource();

}
//export class ExampleDataSource extends DataSource<UclTeams> {
//    /** Stream of data that is provided to the table. */
//    data = new BehaviorSubject<UclTeams[]>(teamData);

//    /** Connect function called by the table to retrieve one stream containing the data to render. */
//    connect(): Observable<UclTeams> {
//        return this.data;
//    }

//    disconnect() { }
//}