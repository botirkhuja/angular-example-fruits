import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddFruitComponent } from './fruits/add-fruit/add-fruit.component';
import { EditFruitComponent } from './fruits/edit-fruit/edit-fruit.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { UnknownPageComponent } from './unknown-page/unknown-page.component';
import { EditResolverService } from './fruits/edit-fruit/edit-resolver.service';
import { SingUpComponent } from './sing-up/sing-up.component';
import { FavoritesComponent } from './fruits/favorites/favorites.component';

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
    resolve: {data: EditResolverService},
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
    path: 'sign-up',
    component: SingUpComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'unknown',
    component: UnknownPageComponent,
    data: {messageToShow: 'This page is unknown page'}
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
