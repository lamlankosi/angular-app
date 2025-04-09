import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../homes-display/homes-display.component';
import { DetailsComponent } from '../details/details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousingRoutingModule { }


