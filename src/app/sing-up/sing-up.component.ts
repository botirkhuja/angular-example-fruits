import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../core/login.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  @ViewChild('signUpForm') singUPForm: NgForm;

  userPassword: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.userPassword = '';
  }

  onSingUp() {
    const email = this.singUPForm.value.userInformation.email;
    const password = this.singUPForm.value.password;
    
    this.loginService.signUp(email, password)
    console.log('form is:', this.singUPForm);
  }

  changeForm() {
    this.singUPForm.setValue({
      userInformation: {
        userName: 'John_Doe',
        email: 'john@doe.com',
      },
      password: 'somePass',
      showPassword: 'true'
    });
  }

  enterName() {
    this.singUPForm.form.patchValue({
      userInformation: {
        userName: 'Jane Williams'
      }
    });
  }

}
