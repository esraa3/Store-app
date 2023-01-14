import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from '../app/product-list/product-list.component'
import {CartComponent} from '../app/cart/cart.component'
import { ProductdetailComponent}from'../app/productdetail/productdetail.component'

const routes: Routes = [
  {path:"ProductList",component:ProductListComponent,children:[]},
  {path:"Cart",component:CartComponent},
  {
    path:'ProductDetail',component:ProductdetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
