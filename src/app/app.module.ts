import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { FruitsComponent } from './fruits/fruits.component';
import { AddFruitComponent } from './fruits/add-fruit/add-fruit.component';
import { CartService } from './core/cart.service';
import { EditFruitComponent } from './fruits/edit-fruit/edit-fruit.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FruitsComponent,
    AddFruitComponent,
    EditFruitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
