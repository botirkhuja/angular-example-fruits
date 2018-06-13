import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CartService } from '../core/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cartOfFruits: Array<string>;

  @Input() inputName: string;

  constructor(
    private cartS: CartService,
  ) {
    this.cartOfFruits = this.cartS.getCartContent();
    console.log('cart contains this fruits', this.cartOfFruits);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('OnDestroy Happened');
  }

  // onBananaClick(){
  //   this.counter++;
  // }

}
