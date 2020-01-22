import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  numberOfProducts = 0;
  constructor(private cartService: CartService) {
    this.cartService.numberOfProducts.subscribe((numberOfProducts: number) => {
      this.numberOfProducts = numberOfProducts;
    });
  }

  ngOnInit() {
    this.numberOfProducts = this.cartService.numOfProducts;
  }
}
