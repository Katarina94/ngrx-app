import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Product } from '../shared/product.model';
import * as CartActions from '../store/cart.actions';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Observable<{ products: Product[] }>;
  private subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.products = this.store.select('cart');
  }

  onRemoveFromCart(product: any) {
    this.store.dispatch(new CartActions.RemoveProductFromCart(product.id));
  }

  onUpdateQuantity(product: any) {
    this.store.dispatch(new CartActions.UpdateProductQuantity(1, product.id));
  }

  onHome() {
    this.router.navigate(['/']);
  }
}
