import { Routes } from '@angular/router';
import { WebsiteLayoutComponent } from './layouts/website/website.component';
import { HomeComponent } from './modules/website/pages/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        component: WebsiteLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./modules/website/website.routes') }
        ]


    }
];
