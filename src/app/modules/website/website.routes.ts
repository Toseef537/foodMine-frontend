import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { FoodDetailComponent } from "./pages/food-detail/food-detail.component";
import { CartPageComponent } from "./pages/cart-page/cart-page.component";

export default [
    {
        path: 'home', loadChildren: () => import('./pages/home/home.routes')
    },
    { path: 'search/:searchTerm', component: HomeComponent },
    { path: 'food/:id', component: FoodDetailComponent },
    { path: 'tag/:tag', component: HomeComponent },
    { path: 'cart-page', component: CartPageComponent },






] as Routes