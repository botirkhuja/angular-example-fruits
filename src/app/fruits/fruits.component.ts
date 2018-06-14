import { CartService } from '../core/cart.service';
import {
  Component,
  OnInit,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],
  // providers: [CartService]
})
export class FruitsComponent implements OnInit,
DoCheck,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  fruitName: string;
  showChildComponent: boolean;
  isButtonDisabled: boolean;
  listOfFruits: Array<string> = [];

  constructor() {}

  ngOnInit() {
    this.showChildComponent = false;
    this.isButtonDisabled = true;
    console.log('onInit Happened');
  }

  ngDoCheck() {
    console.log('doCheck Happened');
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('AfterViewInit Happened');
  }

  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('AfterViewChecked Happened');

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('OnDestroy Happened');
  }


}
