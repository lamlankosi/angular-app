import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../homes-display/homes-display.component';
import { DetailsComponent } from '../details/details.component';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeComponent,  
    DetailsComponent,
    HousingLocationComponent
  ]
})
export class HousingModule { }
