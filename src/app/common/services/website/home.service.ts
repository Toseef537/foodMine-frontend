import { Injectable } from '@angular/core';
import { foodData } from '../../../data'
import { Observable, of } from 'rxjs';
import { IFood } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  searchItems: any;
  constructor() { }

  getAllFoodItems(): Observable<IFood[]> {
    return of(foodData)
  }
  getFoodBySearchTerm(searchTerm: string) {
    this.getAllFoodItems().subscribe((res) => {
      this.searchItems = res.filter((item) => {
       return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    })

  }

}
