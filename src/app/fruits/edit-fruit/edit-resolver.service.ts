import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { LoginService } from '../../core/login.service';

@Injectable({
  providedIn: 'root'
})
export class EditResolverService implements Resolve<{loginStatus: boolean, message: string}> {

  constructor(
    private loginService: LoginService
  ) { }

  resolve() {
    return this.loginService.isLoggedIn().then((status: boolean) => {
      if (status) {
        return {loginStatus: status, message: 'User Logged in'};
      }
      return {
        loginStatus: status,
        message: 'Please log in to edit cart content'
      };
    });
  }
}
