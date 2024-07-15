import { Routes } from '@angular/router';;
import { HomeComponent } from './modules/website/pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'website'
        },
        children: [
            { path: '', loadChildren: () => import('./modules/website/website.routes') }
        ]


    },
    {
        path: 'dashboard',
        component: LayoutComponent,
        data: {
            layout: 'dashboard'
        },
        children: [
            { path: '', loadChildren: () => import('./modules/dashboard/dashboard.routes') },
          ]

    }
];
