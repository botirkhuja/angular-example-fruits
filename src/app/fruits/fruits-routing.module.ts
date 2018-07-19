import { Routes } from '@angular/router';
import { FruitsComponent } from './fruits.component';
import { AddFruitComponent } from './add-fruit/add-fruit.component';
import { AuthGuardService } from '../auth-guard.service';
import { EditResolverService } from './edit-fruit/edit-resolver.service';
import { EditFruitComponent } from './edit-fruit/edit-fruit.component';
import { CustomInputComponent } from './edit-fruit/custom-input/custom-input.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: FruitsComponent,
  //   children: [
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
        path: 'favorites',
        component: FavoritesComponent,
      },

    // ]
  // },
];
