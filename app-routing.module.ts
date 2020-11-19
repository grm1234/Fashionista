import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CompaniesAddComponent } from './companies-add/companies-add.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { UsersComponent } from './users/users.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './companies-list/companies-list.component'
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  { path: 'companies-list', component: CompaniesListComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'product-add', component: ProductAddComponent, canActivate: [AuthGuard] },
  { path: 'products/:id', component: ProductDetailsComponent, canActivate: [AuthGuard] },
  { path: 'productsEdit/:id', component: ProductEditComponent, canActivate: [AuthGuard] },
  { path: 'companies/:id', component: CompanyDetailsComponent, canActivate: [AuthGuard] },
  { path: 'company-add', component: CompaniesAddComponent, canActivate: [AuthGuard] },
  { path: 'company-edit/:id', component: CompaniesAddComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule,ReactiveFormsModule],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
