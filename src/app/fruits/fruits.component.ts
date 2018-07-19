
import { Router, ActivatedRoute } from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';

import { EditService } from '../core/edit.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],
})
export class FruitsComponent implements OnInit {
  // fruitIndexToEdit: any;
  showChildComponent: boolean;
  isEditModeEnabaled: boolean;
  routingToTheFruitToEdit: Array<string | number>;
  todaysDate = new Date();


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private editService: EditService
  ) {}

  ngOnInit() {
    this.routingToTheFruitToEdit = ['edit'];
    this.showChildComponent = false;
    this.isEditModeEnabaled = false;

    this.editService.currentEditingItem.subscribe((num: number) => {
      if (num >= 0) {
        this.router.navigate(['edit', num], {relativeTo: this.activatedRoute});
      }
    });

  }

  // onFruitSelectionToEdit(fruit: {value: string, index: number}) {
  //   this.editService.currentEditingItem.next(fruit.index)
  //   this.router.navigate(['edit', fruit.index])
  // }
}
