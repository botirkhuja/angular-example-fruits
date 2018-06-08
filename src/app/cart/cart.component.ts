import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  counter: number = 0;

  @Input() inputName: string;

  constructor() { }

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
