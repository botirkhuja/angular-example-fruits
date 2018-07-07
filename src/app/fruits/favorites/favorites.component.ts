import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoritesForm: FormGroup;
  genders = ['male', 'female'];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.favoritesForm = new FormGroup({
      'personsInfo': new FormGroup({
        'personName': new FormControl(null, Validators.required),
        'personEmail': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'personGender': new FormControl('male'),
      'fruitNames': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.favoritesForm);
  }

  onAddFruit() {
    (this.favoritesForm.get('fruitNames') as FormArray).push(
      this.fb.control(null)
    );
  }

}
