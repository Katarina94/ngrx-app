import { Component, OnInit } from '@angular/core';
import { ProductServerService } from '../services/server/product-server.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  products = [
    {name: 'Test 1', description: 'Some Description'},
    {name: 'Test 2', description: 'Some Description'},
  ];

  constructor(private productServerService: ProductServerService) { }

  ngOnInit() {
    // this.productServerService.getProducts(undefined, undefined, this.itemsPerPage, this.currentPage).subscribe((response1) => {
    //   this.products = response1.data;
    //   this.numberOfItems = response1.lenght;
    // }, (error) => {
    //   console.log(error);
    // });
  }
}
