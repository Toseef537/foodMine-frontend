import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export default [
    {
        path: '', loadChildren: () => import('./home/dashboard-home.routes')
    },

] as Routes