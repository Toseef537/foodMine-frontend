import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { FoodDetailComponent } from "./pages/food-detail/food-detail.component";

export default [
    {
        path: 'home', loadChildren: () => import('./pages/home/home.routes')
    },
    { path: 'search/:searchTerm', component: HomeComponent },
    { path: 'food/:id', component: FoodDetailComponent },
    { path: 'tag/:tag', component: HomeComponent },





] as Routes