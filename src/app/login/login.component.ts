import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.logUserIn();
  }

}
