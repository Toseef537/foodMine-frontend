import { Component, inject } from '@angular/core';
import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';
import { IFood, ITag } from 'src/app/shared/models/food';
import { HomeService } from 'src/app/common/services/website/home.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SearchComponent } from '../../components/search/search.component';
import { NotFoundComponent } from 'src/app/common/components/not-found/not-found.component';

@Component({
  selector: 'website-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, NgFor, RouterLink, SearchComponent,RouterLinkActive,NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  foodItems: IFood[] = [];
  tags: ITag[] = [];
  searchValue: any;
  #homeService: HomeService = inject(HomeService);
  #router: Router = inject(Router);

  /**
   * Getting All Food Items
   */
  constructor(activatedRoute: ActivatedRoute) {
    this.#homeService.getAllTag().subscribe((tags) => {
      this.tags = tags;
    })
    activatedRoute.params.subscribe((param) => {
      if (param['searchTerm']) {
        this.#homeService.getFoodBySearchTerm(param['searchTerm']).subscribe((items) => {
          this.foodItems = items;
        });

      }else if(param['tag']){
        this.#homeService.getFoodByTag(param['tag']).subscribe((items)=>{
          this.foodItems=items;
        })
      } 
      else {
        this.#homeService.homePageData$.subscribe((items) => {
          this.foodItems = items;

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
