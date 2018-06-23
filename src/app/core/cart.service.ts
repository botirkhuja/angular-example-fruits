import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

// @Injectable()
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartList: Array<string>;
  public listOFItems: ReplaySubject<any>;

  constructor(
    private routerService: Router
  ) {
    this.cartList = [
      'grape',
      'date'
    ];
    this.listOFItems = new ReplaySubject(1);
    this.listOFItems.next([...this.cartList]);
  }

  addToCart(item: string) {
    this.cartList.push(item);
    this.listOFItems.next([...this.cartList]);
  }

  getCartContent(): Array<string>{
    // return this.cartList.slice();
    return [...this.cartList];
  }

  updateCartContent(index: number, newContentName): void {
    this.cartList.splice(index, 1, newContentName);
    // this.cartList[index] = newContentName;
    this.listOFItems.next([...this.cartList]);
    this.routerService.navigateByUrl('/');
    // return true;
  }
}
