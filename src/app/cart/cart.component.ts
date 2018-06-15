import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../core/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartOfFruits: Array<string>;

  @Output() selectedFruit = new EventEmitter();

  constructor(
    private cartS: CartService,
  ) {
    this.cartOfFruits = this.cartS.getCartContent();
  }

  ngOnInit() {
    console.log('list of fruits',this.cartOfFruits);
  }

  onEdit(index: number, name: string) {
    this.selectedFruit.emit({value: name, index: index});
  }

}
