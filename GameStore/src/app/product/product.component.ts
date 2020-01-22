import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() element: any;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
  }

  onMoreDetailsClick(id: number) {
    this.router.navigate(['/product', id]);
  }

  onAddToCart() {
    this.cartService.addProduct({id: 1, name: 'test'});
  }

}
