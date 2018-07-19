import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginStatus = false;

  constructor(private router: Router) { }

  logUserIn(): void {
    this.loginStatus = true;
    this.router.navigateByUrl('fruits');
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
