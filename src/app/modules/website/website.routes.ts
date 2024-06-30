import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

export default [
    {
        path: 'home', loadChildren: () => import('./pages/home/home.routes')
    },
    { path: 'search/:searchTerm', component: HomeComponent }


] as Routes