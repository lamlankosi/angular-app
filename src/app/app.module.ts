import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { HousingModule } from 'src/app/house-listing/housing/housing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HousingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
