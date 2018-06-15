import { CartService } from '../core/cart.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],
})
export class FruitsComponent implements OnInit {
  fruitIndexToEdit: any;
  showChildComponent: boolean;
  isEditModeEnabaled: boolean;
  listOfFruits: Array<string> = [];

  constructor() {}

  ngOnInit() {
    this.showChildComponent = false;
    this.isEditModeEnabaled = false;
  }

  onFruitSelectionToEdit(event: number) {
    this.fruitIndexToEdit = event;
    this.isEditModeEnabaled = true;
  }
}
