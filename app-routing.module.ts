//import { LoginComponent } from './auth/login/login.component';
import { ShoesDetailsComponent } from './shoes-details/shoes-details.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClothesComponent } from './clothes/clothes.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ShoesComponent } from './shoes/shoes.component';
import { CartComponent } from './cart/cart.component';
import { ClothesOneComponent } from './clothes-one/clothes-one.component';
import { AccessoriesDetailsComponent } from './accessories-details/accessories-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clothes', component: ClothesOneComponent},
  { path: 'clothesDetails/:id', component: ClothesComponent},
  { path: 'accessories', component: AccessoriesComponent},
  { path: 'accDetails/:id', component: AccessoriesDetailsComponent},
  { path: 'shoes', component: ShoesComponent},
  { path: 'shoesDetails/:id', component: ShoesDetailsComponent},
  { path: 'cart', component: CartComponent}
  //{ path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
