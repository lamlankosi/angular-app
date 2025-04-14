import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { DetailsComponent } from 'src/app/details/details.component';
import { AboutComponent } from 'src/app/about/about.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialComponent } from './material/material.component';
import { AgGridComponent } from './ag-grid/ag-grid.component'
import { AgChartsComponent } from './ag-charts/ag-charts.component'


const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Houses',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details',
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Us'
    },
    {
        path: 'material',
        component: MaterialComponent,
        title: 'Angular Material'
    },
    {
        path: 'ag-grid',
        component: AgGridComponent,
        title: 'AG Grid'
    },
    {
        path: 'ag-charts',
        component: AgChartsComponent,
        title: 'Ag Charts'

    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        title: '404 Error'
    }
];
export default routeConfig;