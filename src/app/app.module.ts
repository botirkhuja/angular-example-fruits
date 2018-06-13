import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitComponent } from './fruit/fruit.component';
import { CartService } from './core/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FruitsComponent,
    FruitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
