import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  @Input() fruitName: string;
  @Output() removeMe: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRemove() {
    this.removeMe.emit(this.fruitName);
  }

}
