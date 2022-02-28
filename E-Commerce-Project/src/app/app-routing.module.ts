import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NotFounPageComponent } from './not-foun-page/not-foun-page.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'login', component:LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: ':id', component: ProductDetailsComponent },
  { path: '**', component: NotFounPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
