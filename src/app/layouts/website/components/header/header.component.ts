import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from 'src/app/common/services/website/cart.service';

@Component({
  selector: 'website-header',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  totalCount: number = 0;
  cartService: CartService = inject(CartService);
  constructor() {
    this.cartService.getCartObservable().subscribe((res) => {
      this.totalCount = res.totalCount;
    })
  }
}
