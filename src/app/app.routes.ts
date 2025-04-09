import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { DetailsComponent } from './house-listing/details/details.component';

export const routeConfig: Routes = [
  { path: '', component: HomeComponent, title: 'Home'},
  { path: 'details/:id', component: DetailsComponent, title: 'details' }
];
export default routeConfig;