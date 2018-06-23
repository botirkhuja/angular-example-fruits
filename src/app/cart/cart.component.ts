import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CartService } from '../core/cart.service';
import { EditService } from '../core/edit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cartOfFruits: Array<string>;
  selectedFruitName: string;
  private subscription: Subscription;

  // @Output() selectedFruit = new EventEmitter();

  constructor(
    private cartS: CartService,
    private editService: EditService
  ) {
    // this.cartOfFruits = this.cartS.getCartContent();
    console.log(this.cartS.listOFItems)
  }

  ngOnInit() {
    this.subscription = this.cartS.listOFItems.subscribe((result: Array<string>)=>{
      this.cartOfFruits = result;
    });
    // this.cartOfFruits = this.cartS.getCartContent();
    this.selectedFruitName = '';
  }

  onEdit(index: number, name: string) {
    // this.cartOfFruits[0] = 'Something different';
    // console.log(this.cartS.getCartContent());
    this.editService.currentEditingItem.next(index);
    this.selectedFruitName = name;
    // this.selectedFruit.emit({value: name, index: index});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
