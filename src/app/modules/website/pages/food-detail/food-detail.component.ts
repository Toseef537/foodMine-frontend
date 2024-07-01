import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HomeService } from 'src/app/common/services/website/home.service';
import { IFood } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-detail',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage,RouterLink],
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent {
  #homeService: HomeService = inject(HomeService);
  food!: IFood;

  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((param) => {
      const id: any = param['id'];

      if (id) {
        this.#homeService.getFoodById(id).subscribe((item) => {
          this.food = item;

        })
      }
    })
  }
}
