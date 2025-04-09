import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { provideRouter } from '@angular/router';
import { routeConfig } from './app/app.routes';  // ✅ Ensure named import

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routeConfig)]  // ✅ Use named import
}).catch(err => console.error(err));
