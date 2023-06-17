import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomapageComponent } from './component/pages/homapage/homapage.component';
import { SigninComponent } from './component/auth/signin/signin.component';
import { SignupComponent } from './component/auth/signup/signup.component';
import { AdminLayoutComponent } from './component/layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './component/pages/admin/dashboard/dashboard.component';
import { ManagerProductComponent } from './component/pages/admin/manager-product/manager-product.component';
import { AddProductComponent } from './component/pages/admin/add-product/add-product.component';
import { UpdateProductComponent } from './component/pages/admin/update-product/update-product.component';

const routes: Routes = [
  { path: '', component: HomapageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ManagerProductComponent },
      { path: 'add', component: AddProductComponent },
      { path: 'products/:id/edit', component: UpdateProductComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
