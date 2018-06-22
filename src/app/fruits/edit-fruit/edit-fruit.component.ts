import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../core/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-fruit',
  templateUrl: './edit-fruit.component.html',
  styleUrls: ['./edit-fruit.component.css']
})
export class EditFruitComponent implements OnInit {

  // @Input() fruitName: {
  //   value: string,
  //   index: number
  // };

  constructor() { }

  ngOnInit() {
  }

}
