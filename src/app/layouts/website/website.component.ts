import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from 'src/app/modules/website/pages/home/home.component';
import { LoadingComponent } from 'src/app/common/components/loading/loading.component';
import { LoadingService } from 'src/app/common/services/loading.service';

@Component({
  selector: 'website-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet, HomeComponent, LoadingComponent],
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteLayoutComponent {
  isLoading!: boolean;
  #LoadingService = inject(LoadingService)
  constructor() {
    this.#LoadingService.isLoading.subscribe((loading) => {
      this.isLoading = loading;
    })
  }
}
