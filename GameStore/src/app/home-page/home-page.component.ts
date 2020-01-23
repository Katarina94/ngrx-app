import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  products = [
    new Product(3, 'neko ime', 'nesto', 32, 1),
    new Product(4, 'neko drugo ime', 'nesto', 33, 1),
  ];

  constructor() { }

  ngOnInit() {
  }
}
