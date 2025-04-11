import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from 'src/app/housing-location/housing-location.component';
import { HousingLocation } from  'src/app/housinglocation/housinglocation.component';
import { HousingService } from 'src/app/housing.service';


@Component({
    selector: 'app-home',
    imports: [CommonModule, HousingLocationComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})

export class HomeComponent {
    housingLocationList: HousingLocation[] = [];
    housingService: HousingService = inject(HousingService);
    filteredLocationList: HousingLocation[] = [];

    constructor() {
        this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
            this.housingLocationList = housingLocationList;
            this.filteredLocationList = housingLocationList;
        })
    }

    filterResults(text: string) {
        if (!text) this.filteredLocationList = this.housingLocationList;

        this.filteredLocationList = this.housingLocationList.filter(
            housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
        )
    }
}