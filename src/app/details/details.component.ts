import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/housing.service';
import { HousingLocation } from 'src/app/housinglocation/housinglocation.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-details',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './details.component.html',
    styleUrl: './details.component.css',
})


export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute);
    housingService = inject(HousingService);
    housingLocation: HousingLocation | undefined;
    applyForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
    })
    constructor() {
        const housingLocationId = Number(this.route.snapshot.params["id"]);
        this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
            this.housingLocation = housingLocation;
        })
    }

    submitApplication() {
        this.housingService.submitApplication(
            this.applyForm.value.firstName ?? '',
            this.applyForm.value.lastName ?? '',
            this.applyForm.value.email ?? '',
        );
    }
    
}

