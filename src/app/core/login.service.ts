import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginStatus = false;

  constructor() { }

  logUserIn(): void {
    this.loginStatus = true;
  }

  logUserOut(): void {
    this.loginStatus = false;
  }

  isLoggedIn(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loginStatus);
      }, 800);
    });
    return promise;
  }

  isLoggedInObservable(): Observable<boolean> {
    const observable: Observable<boolean> = Observable.create((observer: Observer<boolean>) => {

        observer.next(this.loginStatus);

    });
    return observable;
  }

}
