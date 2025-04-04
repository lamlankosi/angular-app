import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: `
    <p>Car Listing: {{ display }}</p>
  `,
})
export class AppComponent {
  private carService = inject(CarService);

  display = this.carService.getCars().join(' ⭐️ ');
}
