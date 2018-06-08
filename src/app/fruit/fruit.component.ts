import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  isButtonDisabled: boolean = true;
  fruitName: string = '';
  listOfFruitNames: Array<string> = [
    'banana',
    'apple',
    'mango',
    'strawberry'
  ]

  // @Input() fruitName: string;
  @Output() fruitMatched: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

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

  onAddingFruit(referanceToInput) {
    const passedFruitValue = referanceToInput.value
    const fruitMatches = this.listOfFruitNames.includes( passedFruitValue );
    if (fruitMatches) {
      this.fruitMatched.emit(passedFruitValue)
    }
  }

}
