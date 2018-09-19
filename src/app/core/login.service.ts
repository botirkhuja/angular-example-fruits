import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginStatus = false;

  constructor(private router: Router) { }

  logUserIn(email, password): void {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.loginStatus = true;
        this.router.navigateByUrl('fruits');
      })
      .catch(error => console.log('Error in login', error));
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

  signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => console.log('error in signing up', error));
  }

}
