import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./components/list-product/list-product.component";
import {EditProductComponent} from "./components/edit-product/edit-product.component";
import {CreateProductComponent} from "./components/create-product/create-product.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AdminAuthGuard} from "./helper/admin-auth-guard";
import {AuthGuard} from "./helper/auth-guard";
import {NavbarComponent} from "./components/navbar/navbar.component";

function AdminComponent() {

}

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
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'search',
    component: NavbarComponent
  }
  // {
  //   path: 'admin',
  //   canActivate: [AdminAuthGuard],
  //   component: AdminComponent,
  //   loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  // },
  // {
  //   path: 'user',
  //   canActivate: [AuthGuard],
  //   component: HomePageComponent,
  //   loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
