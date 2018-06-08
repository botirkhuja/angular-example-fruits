import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit,
OnChanges,
DoCheck,
AfterViewInit,
AfterContentInit, AfterContentChecked, AfterViewChecked,
OnDestroy {
  fruitName: string;
  showChildComponent: boolean = false;
  isButtonDisabled: boolean = true;
  listOfFruits: Array<string> = [];

  constructor() { }

  ngOnInit() {
    console.log('onInit Happened');
  }

  ngOnChanges() {
    console.log('onChanges Happened');
  }

  ngDoCheck() {
    console.log('doCheck Happened');
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('AfterViewInit Happened');
  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('AfterContentInit Happened');

  }

  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('AfterContentChecked Happened');
  }

  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('AfterViewChecked Happened');

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('OnDestroy Happened');
  }


}
