import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ADD_FOOD_URL } from 'src/app/constants/urls';
import { IFood } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  #http = inject(HttpClient);

  constructor() { }

  addFood(food: IFood): Observable<IFood> {
    return this.#http.post<IFood>(ADD_FOOD_URL, food)
  }
}