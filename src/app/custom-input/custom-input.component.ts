import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../core/cart.service';
import { EditService } from '../core/edit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit, OnDestroy {
  fruitIndex: number;
  fruitName: string;
  private subscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private editService: EditService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe( (params)=>{
      this.fruitIndex = params.fruitIndex;
      const cartContent = this.cartService.getCartContent();
      this.fruitName = cartContent[this.fruitIndex];
      this.editService.currentEditingItem.next(params.fruitIndex);
    })
  }

  onSave(newValue: string) {
    this.cartService.updateCartContent(this.fruitIndex, newValue);
    this.fruitName = newValue;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
