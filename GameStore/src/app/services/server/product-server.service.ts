import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Product {
  lenght: number;
  data: [{
    _id: number,
    name: string,
    description: string,
    quantity: number,
  }];
}

@Injectable()

export class ProductServerService {

  constructor(private http: HttpClient) { }

  getProducts(value?: number, property?: string, perPage?: number, pageNum?: number, img?: string) {
    const query =  {};

    if (property) {
      query[property] = value;
    }
    if (perPage) {
      query['perPage'] = perPage;
    }
    if (pageNum) {
      query['pageNum'] = pageNum;
    }

    const params = new HttpParams({
      fromObject: query
    });

    return this.http.get<Product>('product', {params});
  }

}
