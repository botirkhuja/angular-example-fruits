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

  constructor(
    private cartS: CartService,
    private editService: EditService
  ) {  }

  ngOnInit() {
    this.subscription = this.cartS.listOFItems.subscribe((result: Array<string>) => {
      this.cartOfFruits = result;
    });
    this.selectedFruitName = '';
  }

  onEdit(index: number, name: string) {
    this.editService.currentEditingItem.next(index);
    this.selectedFruitName = name;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
