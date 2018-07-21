import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CartComponent } from './cart/cart.component';
import { FruitsComponent } from './fruits.component';
import { AddFruitComponent } from './add-fruit/add-fruit.component';
import { EditFruitComponent } from './edit-fruit/edit-fruit.component';
import { CustomInputComponent } from './edit-fruit/custom-input/custom-input.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ShortnamePipe } from './cart/shortname.pipe';
import { ColorChangerDirective } from './favorites/color-changer.directive';
import { BackgroundColorChangerDirective } from './favorites/background-color-changer.directive';
import { UnlessDirective } from './favorites/unless.directive';
import { TextColorChangerDirective } from './favorites/text-color-changer.directive';
import { FruitsRoutingModule } from './fruits-routing.module';
import { CartService } from '../core/cart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FruitsRoutingModule
  ],
  declarations: [
    CartComponent,
    FruitsComponent,
    AddFruitComponent,
    EditFruitComponent,
    CustomInputComponent,
    FavoritesComponent,
    ShortnamePipe,
    ColorChangerDirective,
    BackgroundColorChangerDirective,
    TextColorChangerDirective,
    UnlessDirective
  ],
  providers: [CartService]
})
export class FruitsModule { }
