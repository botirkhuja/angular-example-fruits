import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-edit-fruit',
  templateUrl: './edit-fruit.component.html',
  styleUrls: ['./edit-fruit.component.css']
})
export class EditFruitComponent implements OnInit {

  @Input() fruitName: {
    value: string,
    index: number
  };

  constructor(
    private carService: CartService
  ) { }

  ngOnInit() {
  }

  onSave() {
    const result = this.carService.updateCartContent(this.fruitName.index);
  }

}
