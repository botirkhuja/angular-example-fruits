import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

// @Injectable()
@Injectable()
export class CartService {
  private cartList: Array<string>;
  public listOFItems: ReplaySubject<any>;

  constructor(
    private routerService: Router,
    private httpClient: HttpClient
  ) {
    this.cartList = [
      'grape',
      'date'
    ];
    this.listOFItems = new ReplaySubject(1);
    this.listOFItems.next([...this.cartList]);
    console.log('cart service is created');
  }

  addToCart(item: string) {
    this.cartList.push(item);
    this.listOFItems.next([...this.cartList]);
  }

  getCartContent(): Array<string> {
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

  updateWholeCart(newCartItems) {
    this.listOFItems.next([...newCartItems]);
  }

  fetchData() {
    return this.httpClient.get('https://mybackend-a3979.firebaseio.com/data.json')
      // .pipe(
      //   catchError( error => {
      //     console.log(error);
      //     this.routerService.navigate(['unknown']);
      //     return of(error);
      //   })
      // )
      ;
  }

  postData() {
    const dataToPost = {
      cartItems: this.cartList
    };

    return this.httpClient.put('https://mybackend-a3979.firebaseio.com/data.json', dataToPost);
  }
}
