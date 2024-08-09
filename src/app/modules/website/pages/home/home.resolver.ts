import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { forkJoin } from 'rxjs';
import { CartService } from 'src/app/common/services/website/cart.service';
import { HomeService } from 'src/app/common/services/website/home.service';
import { IFood } from 'src/app/shared/models/food';

export const homeResolver: ResolveFn<any> = (route, state) => {
 const homeService= inject(HomeService);
  return homeService.getAllFoodItems()
 
};
