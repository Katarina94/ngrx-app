import { Action } from '@ngrx/store';

import { Product } from '../shared/product.model';

export const ADD_PRODUCT_TO_CART = '[CART] Add Product To Cart';
export const REMOVE_PRODUCT_FROM_CART = '[CART] Remove Product To Cart';
export const UPDATE_PRODUCT_QUANTITY = '[CART] Update Ingredient';

export class AddProductToCart implements Action {
  readonly type = ADD_PRODUCT_TO_CART;

  constructor(public payload: Product) {}
}

export class RemoveProductFromCart implements Action {
  readonly type = REMOVE_PRODUCT_FROM_CART;

  constructor(public productId: number) {}
}

export class UpdateProductQuantity implements Action {
  readonly type = UPDATE_PRODUCT_QUANTITY;

  constructor(public quantity: number, public productId: number) {}
}

export type CartActions =
  | AddProductToCart
  | RemoveProductFromCart
  | UpdateProductQuantity;
