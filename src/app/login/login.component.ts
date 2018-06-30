import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../core/login.service';
import { Observable, interval, Subscription, Observer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  observableInterval: Subscription;

  newObservable: Observable<string>;

  subscriptionFromNewObservable: Subscription;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.observableInterval = interval(1000).subscribe((num) => {
      console.log('interval', num);
    });

    this.newObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        console.log(observer.closed)
        observer.next('First Data from Observable');
      }, 1000);
      setTimeout(() => {
        console.log(observer.closed)
        observer.next('Second data');
      }, 4000);
      // setTimeout(() => {
      //   observer.error('Error happened')
      // }, 6000);
      setTimeout(() => {
        observer.complete()
      }, 7000);
    })

    this.subscriptionFromNewObservable = this.newObservable
      .subscribe(
        (data: string) => {
          console.log('observable:', data);
        },
        (error: any) => {
          console.log('error is:', error);
        },
        () => {
          console.log('completed');
        }
      )

  }

  onSubmit() {
    this.loginService.logUserIn();
  }

  ngOnDestroy() {
    this.observableInterval.unsubscribe();
    this.subscriptionFromNewObservable.unsubscribe();
  }

}
