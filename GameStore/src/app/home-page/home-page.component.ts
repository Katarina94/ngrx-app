import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  products = [
    new Product(1,
        'LINDA. meer',
        '12 maanden',
        106.20,
        1,
        'https://abonnement.linda.nl/media/catalog/product/cache/2944f782a53ffd95f9f60f66e34bc241/l/i/linda._lloves_lman_titelshop_3.png'),
    new Product(2,
        'LINDA.',
        '12 maanden',
        86.85,
        1,
        'https://sanomacover.netwinst.nl/img/linda/linda523x416.jpg'),
    new Product(3,
        'LINDA.plus',
        '12 maanden',
        77.00,
        1,
        'https://abonnement.linda.nl/media/catalog/product/cache/2944f782a53ffd95f9f60f66e34bc241/1/8/187linda_lm.png'),
    new Product(
        4,
        'LINDA.alles',
        '12 maanden',
        135.45,
        1,
        'https://abonnement.linda.nl/media/catalog/product/cache/2944f782a53ffd95f9f60f66e34bc241/1/8/187-3linda._lmei_lloves_l_homo_lman_titelshop_1.png'),
    new Product(
        5,
        'LINDA.half jaar',
        '6 maanden',
        35.45,
        1,
        'https://sanomacover.netwinst.nl/img/linda/linda523x416.jpg'),

  ];

  constructor() { }

  ngOnInit() {
  }
}
