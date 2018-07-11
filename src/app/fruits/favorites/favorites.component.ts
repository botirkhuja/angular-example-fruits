import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoritesForm: FormGroup;
  genders = ['male', 'female'];

  restrictedNames = ['Botir', 'John'];

  constructor() { }

  ngOnInit() {
    this.favoritesForm = new FormGroup({
      'personsInfo': new FormGroup({
        'personName': new FormControl(null, [Validators.required, this.nameRestrictionValidator.bind(this)]),
        'personEmail': new FormControl(null, [Validators.required, Validators.email], this.asyncEmailRestrictionValidator),
      }),
      'personGender': new FormControl('male'),
      'fruitNames': new FormArray([])
    });
  }

  onSubmit() {
    console.log('current form', this.favoritesForm);
  }

  onAddFruit() {
    (this.favoritesForm.get('fruitNames') as FormArray).push(
      new FormControl(null)
    );
  }

  nameRestrictionValidator(control: FormControl): {[key: string]: boolean} {
    const restricted = this.restrictedNames.includes(control.value);
    return restricted ? {nameRestricted: restricted} : null;
  }

  asyncEmailRestrictionValidator(control: FormControl): Promise<any> | Observable<any> {
    const validatorPromise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test') {
          resolve({emailRestricted: true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return validatorPromise;
  }

}
