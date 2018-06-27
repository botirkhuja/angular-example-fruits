import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AddFruitComponent } from "./fruits/add-fruit/add-fruit.component";
import { EditFruitComponent } from "./fruits/edit-fruit/edit-fruit.component";
import { CustomInputComponent } from "./custom-input/custom-input.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from './auth-guard.service';
import { UnknownPageComponent } from './unknown-page/unknown-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'add',
    component: AddFruitComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'edit',
    component: EditFruitComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: ':fruitIndex',
        component: CustomInputComponent,
      }
    ]
  },
  {
    path: 'unknown',
    component: UnknownPageComponent
  },
  {
    path: '**',
    redirectTo: 'unknown',
  }
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
