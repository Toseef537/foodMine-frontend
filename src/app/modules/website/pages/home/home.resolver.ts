import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { HomeService } from 'src/app/common/services/website/home.service';
import { IFood } from 'src/app/shared/models/food';

export const homeResolver: ResolveFn<IFood[]> = (route, state) => {
  return inject(HomeService).getAllFoodItems();
};
