import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
      private router: Router,
      private cartService: CartService,
      private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData: {name: string; address: string}) {
    // Process checkout data here

    alert(`Your order of ${this.items.length} item${this.items.length === 1 ? '' : 's'} has been accepted and will be send to ${customerData.name}, ${customerData.address}.`);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.router.navigate(['/']);
  }

}
