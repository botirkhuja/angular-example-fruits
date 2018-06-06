import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruitName: string = '';
  showChildComponent: boolean = false;
  isButtonDisabled: boolean = true;
  listOfFruits: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  onAddingFruit() {
    // this.showChildComponent = true;
    this.listOfFruits.push(this.fruitName);
    this.fruitName = '';
    console.log(this.listOfFruits);
  }

  onInputChange(event) {
    this.fruitName = event.target.value;

    if (this.fruitName.length > 0) {
      this.isButtonDisabled = false;
    } else {
      this.isButtonDisabled = true;
    }
  }

  removeFruit(fruitToRemove){
    let fruitIndex = this.listOfFruits.findIndex((eachItem) => {
      return eachItem === fruitToRemove;
    })
    this.listOfFruits.splice(fruitIndex, 1);
  }


}
