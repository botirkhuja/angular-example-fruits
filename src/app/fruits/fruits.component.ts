import { CartService } from '../core/cart.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';
import { switchMap } from 'rxjs/operators';

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


  constructor(
    private routeService: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.routingToTheFruitToEdit = ['edit'];
    this.showChildComponent = false;
    this.isEditModeEnabaled = false;
  }

  onFruitSelectionToEdit(fruit: {value: string, index: number}) {
    this.router.navigate(['edit', fruit.index])
  }
}
