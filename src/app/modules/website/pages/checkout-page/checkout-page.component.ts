import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/common/services/user.service';
import { CartService } from 'src/app/common/services/website/cart.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Order } from 'src/app/shared/models/order';
import { ToastrService } from 'ngx-toastr';
import { InputContainerComponent } from 'src/app/common/components/input-container/input-container.component';
import { RouterLink } from '@angular/router';
import { MapComponent } from 'src/app/common/components/map/map.component';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule,InputContainerComponent,ReactiveFormsModule,RouterLink,MapComponent],
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  checkoutForm!: FormGroup;
  #userService = inject(UserService);
  #cartService = inject(CartService);
  #toastrService = inject(ToastrService);

  #fb = inject(FormBuilder);
  order: Order = new Order();
  constructor() {
    const cart = this.#cartService.currentcart;
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }
  ngOnInit(): void {
    let { name, address } = this.#userService.currentUser;
    this.checkoutForm = this.#fb.group({
      name: [name, Validators.required],
      address: [address, Validators.required]
    })
    this.createOrder();
  }

  private fc(){
    return this.checkoutForm.controls;
  }

  createOrder(){
    if(this.checkoutForm.invalid){
      this.#toastrService.warning('Please fill the inputs', 'Invalid Inputs')
      return;
    }

    console.log('value is dfdf',this.fc.name);
    
  }


}
