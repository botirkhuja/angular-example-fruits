import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { UnknownPageComponent } from './unknown-page/unknown-page.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { FruitsModule } from './fruits/fruits.module';
import { CartService } from './core/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UnknownPageComponent,
    SingUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
