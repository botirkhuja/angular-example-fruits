import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AddFruitComponent } from "./fruits/add-fruit/add-fruit.component";
import { EditFruitComponent } from "./fruits/edit-fruit/edit-fruit.component";
import { CustomInputComponent } from "./custom-input/custom-input.component";

const routes: Routes = [
  {
    path: '',
    component: AddFruitComponent
  },
  {
    path: 'edit',
    component: EditFruitComponent,
    children: [
      {
        path: ':fruitIndex',
        component: CustomInputComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
