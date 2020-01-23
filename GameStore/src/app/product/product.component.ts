import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Product } from '../shared/product.model';
import * as CartActions from '../store/cart.actions';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() element: any;
  products: Observable<{ products: Product[] }>;

  constructor(
    private router: Router,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    // this.products = this.store.select('cart');
  }

  onAddToCart(product: Product) {
    this.store.dispatch(new CartActions.AddProductToCart(product));
  }

}
