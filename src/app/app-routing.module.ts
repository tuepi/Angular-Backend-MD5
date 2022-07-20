import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./components/list-product/list-product.component";
import {EditProductComponent} from "./components/edit-product/edit-product.component";

const routes: Routes = [
  {
    path : '',
    component : ListProductComponent
  },{
    path : 'edit/:id',
    component : EditProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
