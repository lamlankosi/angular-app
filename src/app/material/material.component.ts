import { Component } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-material',
  standalone: true,
    templateUrl: './material.component.html',
    styleUrl: './material.component.css',
    imports: [MaterialModule, CommonModule]
})
export class MaterialComponent {
    selectFavourites = new FormControl();
    uclTeams: string[] = ['Arsenal', 'Barcelona', 'Paris Saint German']



    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.uclTeams, event.previousIndex, event.currentIndex);
    }

}
