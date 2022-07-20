import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./components/list-product/list-product.component";
import {EditProductComponent} from "./components/edit-product/edit-product.component";
import {CreateProductComponent} from "./components/create-product/create-product.component";

const routes: Routes = [
  {
    path : 'edit/:id',
    component : EditProductComponent
  },{
    path : 'create',
    component : CreateProductComponent
  },
  {
    path: '',
    component: ListProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
