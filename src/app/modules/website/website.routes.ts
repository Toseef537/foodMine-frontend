import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { FoodDetailComponent } from "./pages/food-detail/food-detail.component";
import { CartPageComponent } from "./pages/cart-page/cart-page.component";
import { LoginComponent } from "src/app/auth/login/login.component";
import { RegisterComponent } from "src/app/auth/register/register.component";

export default [
    {
        path: 'home', loadChildren: () => import('./pages/home/home.routes')
    },
    { path: 'search/:searchTerm', component: HomeComponent },
    { path: 'food/:id', component: FoodDetailComponent },
    { path: 'tag/:tag', component: HomeComponent },
    { path: 'cart-page', component: CartPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
] as Routes