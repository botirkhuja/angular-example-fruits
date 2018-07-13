import { CartService } from '../../core/cart.service';
import { EditService } from '../../core/edit.service';
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
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css'],
})
export class AddFruitComponent implements OnInit {

  isButtonDisabled = true;
  fruitName = '';
  @ViewChild('fruitInputRef') inputRef: ElementRef;

  constructor(
    private cartS: CartService,
    private editService: EditService
  ) { }

  ngOnInit() {
    this.editService.currentEditingItem.next(-1);
  }

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
    this.cartS.addToCart(passedFruitValue);
  }

}
