import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../core/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartOfFruits: Array<string>;
  selectedFruitName: string;

  @Output() selectedFruit = new EventEmitter();

  constructor(
    private cartS: CartService,
  ) {
    // this.cartOfFruits = this.cartS.getCartContent();
    console.log(this.cartS.listOFItems)
  }

  ngOnInit() {
    this.cartS.listOFItems.subscribe((result: Array<string>)=>{
      this.cartOfFruits = result;
    });
    this.cartOfFruits = this.cartS.getCartContent();
    this.selectedFruitName = '';
  }

  onEdit(index: number, name: string) {
    // this.cartOfFruits[0] = 'Something different';
    // console.log(this.cartS.getCartContent());
    this.selectedFruitName = name;
    this.selectedFruit.emit({value: name, index: index});
  }

}
