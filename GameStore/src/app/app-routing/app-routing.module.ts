import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './../home-page/home-page.component';
import { CartComponent } from '../cart/cart.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
