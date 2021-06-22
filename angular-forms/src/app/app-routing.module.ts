import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { RegisterProductComponent } from './component/register-product/register-product.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {
  path:'register',
  component:RegisterProductComponent
  },
  {
  path:'products',
  component:ProductsComponent
  },
  {
    path:'register/products',
    component:ProductsComponent
  },
  {
    path:'signup',
    component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
