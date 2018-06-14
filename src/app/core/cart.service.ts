import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class CartService {
  private cartList: Array<string>;

  constructor() {
    this.cartList = [
      'grape',
      'date'
    ];
  }

  addToCart(item: string) {
    this.cartList.push(item);
  }

  getCartContent(): Array<string>{
    return this.cartList;
  }
}
