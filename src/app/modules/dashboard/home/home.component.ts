import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { IFood } from 'src/app/shared/models/food';
import { HomeService } from 'src/app/common/services/website/home.service';
import {MatDialogModule} from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { AddFoodComponent } from 'src/app/common/modals/add-food/add-food.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage,MatDialogModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  foodItems!:IFood[];
  #homeService=inject(HomeService);
  #dialog=inject(Dialog)
  ngOnInit(): void {
    this.#homeService.homePageData$.subscribe((foods)=>{
      this.foodItems=foods;
      console.log('dashboard foods',foods);
      
    })
  }

  addFood(){
    this.#dialog.open(AddFoodComponent, {
      height: '400px',
      width: '500px',
    })
  }

}
