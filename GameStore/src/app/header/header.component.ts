import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as CartActions from '../store/cart.actions';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  numberOfProducts: any;
  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.store.select('cart').subscribe((cart) => {
      this.numberOfProducts = cart.products.length;
    });
  }
}
