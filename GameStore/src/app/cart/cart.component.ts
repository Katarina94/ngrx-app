import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products = [];
  forbidden = true;
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.products = this.cartService.products;
  }

  onRemoveFromCart(product: any) {
    this.cartService.removeProduct(product);
    this.ngOnInit();
  }

  onHome() {
    this.router.navigate(['/']);
  }
}
