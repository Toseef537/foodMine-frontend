import { Injectable } from '@angular/core';
import { foodData } from '../../../data'
import { BehaviorSubject, Observable, ReplaySubject, map, of, tap } from 'rxjs';
import { IFood, ITag } from 'src/app/shared/models/food';
import { sample_tags } from '../../../data'
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  #homePageData: BehaviorSubject<IFood[]> = new BehaviorSubject<IFood[]>([]);
  constructor() { }

  /**
   *  Getter Method For Food Items
   * */

  get homePageData$(): Observable<IFood[]> {
    return this.#homePageData.asObservable();
  }

  /**
   * Getting All Food Items
   */
  getAllFoodItems(): Observable<IFood[]> {
    return of(foodData).pipe(
      tap((data) => {
        this.#homePageData.next(data)
      })
    )
  }

  /**
   * Getting Food Items According To Search Terms
   */
  getFoodBySearchTerm(searchTerm: string) {
    return this.getAllFoodItems().pipe(
      map((items) => {
        const filteredItems = items.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        this.#homePageData.next(filteredItems);
        return filteredItems;

      }
      )
    )
  }


  /**
   * Getting Food Item By ID
   */
  getFoodById(id: any): Observable<any> {
    return this.getAllFoodItems().pipe(
      map((items) => {
        return items.find(food => food.id == id)
      })
    )
  }

  /**
 * Getting All Tags
 */
  getAllTag(): Observable<ITag[]> {
    return of(sample_tags)
  }

  /**
  * Getting Food Items By Tag
  */
  getFoodByTag(tag: string) {
    return tag === 'All Food' ? this.getAllFoodItems() : this.getAllFoodItems().pipe(
      map((items) => {
        const filteredItems = items.filter((item) =>
          item.name.toLowerCase().includes(tag.toLowerCase())
        )
        this.#homePageData.next(filteredItems);
        return filteredItems;

      }
      )
    )
  }


}


