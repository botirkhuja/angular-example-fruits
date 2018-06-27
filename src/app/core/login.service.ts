import { Injectable } from '@angular/core';

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
      }, 800)
    })
    return promise;
  }

}
