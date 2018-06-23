import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  currentEditingItem: ReplaySubject<number>;

  constructor() {
    this.currentEditingItem = new ReplaySubject(1);
  }
}
