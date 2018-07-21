import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { UnknownPageComponent } from './unknown-page/unknown-page.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'fruits',
    loadChildren: './fruits/fruits.module#FruitsModule'
  },
  {
    path: 'sign-up',
    component: SingUpComponent,
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
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
