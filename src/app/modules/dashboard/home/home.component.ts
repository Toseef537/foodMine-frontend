import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { IFood } from 'src/app/shared/models/food';
import { HomeService } from 'src/app/common/services/website/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  foodItems!:IFood[];
  #homeService=inject(HomeService);
  ngOnInit(): void {
    this.#homeService.getAllFoodItems().subscribe((foods)=>{
      this.foodItems=foods;
      console.log('dashboard foods',foods);
      
    })
  }

}
