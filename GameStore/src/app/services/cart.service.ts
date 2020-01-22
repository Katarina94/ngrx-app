import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CartService {
  products = [];
  numberOfProducts = new EventEmitter<number>();
  constructor() {
    if (localStorage.getItem('cart')) {
      this.products = JSON.parse(localStorage.getItem('cart'));
      this.numberOfProducts.emit(this.products.length);
    }
  }

  addProduct(product: any) {
    this.products.push(product);
    this.numberOfProducts.emit(this.products.length);
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  removeProduct(product: any) {
    const index = this.products.findIndex(product1 => product1._id === product._id);
    if (index >= 0) {
      this.products.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(this.products));
    this.numberOfProducts.emit(this.products.length);
  }

  removeAllProducts() {
    this.products = [];
    localStorage.setItem('cart', JSON.stringify(this.products));
    this.numberOfProducts.emit(this.products.length);
  }

  get numOfProducts() {
    return this.products.length;
  }
}
