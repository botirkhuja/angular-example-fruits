import { Component, OnInit } from '@angular/core';
import { CartService } from './core/cart.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor() {
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB6iwJKq6TU_clCHga1MzRUBW5qQPTXhnI',
      authDomain: 'mybackend-a3979.firebaseapp.com',
      databaseURL: 'https://mybackend-a3979.firebaseio.com',
      projectId: 'mybackend-a3979',
      storageBucket: 'mybackend-a3979.appspot.com',
      messagingSenderId: '269425204737'
    });
  }
}
