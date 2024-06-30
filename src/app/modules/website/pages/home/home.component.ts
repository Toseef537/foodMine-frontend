import { Component, inject } from '@angular/core';
import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';
import { IFood } from 'src/app/shared/models/food';
import { HomeService } from 'src/app/common/services/website/home.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'website-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, NgFor, RouterLink, SearchComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  foodItems: any;
  searchValue: any;
  #homeService: HomeService = inject(HomeService);
  #router: Router = inject(Router);

  /**
   * Getting All Food Items
   */
  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((param) => {
      if (param['searchTerm']) {
        this.#homeService.getFoodBySearchTerm(param['searchTerm']);
        this.foodItems = this.#homeService.searchItems;
      } else {
        this.#homeService.getAllFoodItems().subscribe((res) => {
          this.foodItems = res;
          console.log('food items', res);

        })
      }
    })


  }
  /**
    * Getting Searched Food Items
    */

  search(searchValue: string) {
    this.#router.navigate(['/search/' + searchValue])
  }
}
