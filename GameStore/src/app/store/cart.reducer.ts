import { Product } from '../shared/product.model';
import * as CartActions from './cart.actions';

export interface State {
    products: Product[];
    editedCartItem: Product;
    editedCartItemIndex: number;
}

const initialState: State = {
    products: [],
    editedCartItem: null,
    editedCartItemIndex: -1
};

export function cartReducer(
  state: State = initialState,
  action: CartActions.CartActions
) {
  switch (action.type) {
    case CartActions.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    // case CartActions.UPDATE_PRODUCT_QUANTITY:
    //   // const product = state.products[action.productId];
    //   const updatedProducts = [...state.products];
    //   const product = state.products.filter((prod, index) => {
    //     return prod.id === action.productId;
    //   })
    //     console.log(product)
    //   const updatedProduct = {
    //     ...product,
    //     quantity: product[0].quantity + action.quantity
    //   };
    //   // const updatedProducts = [...state.products];
    //   // console.log('updatedProducts', updatedProduct)
    //   // updatedProducts[0] = updatedProduct;
    //
    //   return {
    //     ...state,
    //     products: updatedProducts,
    //     editedCartItemIndex: -1,
    //     editedCartItem: null
    //   };
    case CartActions.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        products: state.products.filter((prod, index) => {
          return prod.id !== action.productId;
        }),
        editedCartItemIndex: -1,
        editedCartItem: null
      };
    default:
      return state;
  }
}
