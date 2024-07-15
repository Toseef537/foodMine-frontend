import { Route, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { dashboardHomeResolver } from "./dashboard-home.resolver";

export default [
    {
        path: '',component:HomeComponent,resolve:{
            dashboardHomeResolver
        }
    },

] as Route