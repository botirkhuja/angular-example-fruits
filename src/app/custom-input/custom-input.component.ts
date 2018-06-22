import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../core/cart.service';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {
  fruitIndex: number;
  fruitName: string;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( (params)=>{
      this.fruitIndex = params.fruitIndex;
      const cartContent = this.cartService.getCartContent();
      this.fruitName = cartContent[this.fruitIndex];
    })
  }

  onSave(newValue: string) {
    this.cartService.updateCartContent(this.fruitIndex, newValue);
    this.fruitName = newValue;
  }

}
