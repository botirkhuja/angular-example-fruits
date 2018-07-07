import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  @ViewChild('signUpForm') singUPForm: NgForm;

  userPassword: string;

  constructor() { }

  ngOnInit() {
    this.userPassword = '';
  }

  onSingUp() {
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
