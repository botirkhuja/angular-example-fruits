import { CartService } from '../core/cart.service';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css'],
  // providers: [CartService]
})
export class FruitComponent implements OnInit {

  isButtonDisabled: boolean = true;
  fruitName: string = '';
  // listOfFruitNames: Array<string> = [
  //   'banana',
  //   'apple',
  //   'mango',
  //   'strawberry'
  // ]

  // @Input() fruitName: string;
  // @Output() fruitMatched: EventEmitter<string> = new EventEmitter();
  @ViewChild('fruitInputRef') inputRef: ElementRef;
  // @ContentChild('parentContent') parentCont: ElementRef;

  constructor(
    private cartS: CartService
  ) { }

  ngOnInit() {
    // console.log('Our parent content inside ngOnInit', this.parentCont);
  }

  // ngAfterContentInit() {
  //   //Called after ngOnInit when the component's or directive's content has been initialized.
  //   //Add 'implements AfterContentInit' to the class.
  //   console.log('AfterContentInit Happened');
  //   console.log('Our parent content is', this.parentCont);
  // }

  // ngAfterContentChecked() {
  //   //Called after every check of the component's or directive's content.
  //   //Add 'implements AfterContentChecked' to the class.
  //   console.log('AfterContentChecked Happened');
  //   console.log('Our parent content is', this.parentCont);
  // }

  // onRemove() {
  //   this.removeMe.emit(this.fruitName);
  // }

  onInputChange(event) {
    const enteredFruitName = event.target.value;


    if (enteredFruitName.length > 0) {
      this.isButtonDisabled = false;
    } else {
      this.isButtonDisabled = true;
    }
  }

  onAddingFruit() {
    const passedFruitValue = this.inputRef.nativeElement.value;
    // this.inputRef.nativeElement.classList.toggle('active');
    // const fruitMatches = this.listOfFruitNames.includes( passedFruitValue );
    // if (fruitMatches) {
      // this.fruitMatched.emit(passedFruitValue);
      this.cartS.addToCart(passedFruitValue);
    // }
  }

}
