import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomapageComponent } from './component/pages/homapage/homapage.component';
import { DashboardComponent } from './component/pages/admin/dashboard/dashboard.component';
import { ManagerProductComponent } from './component/pages/admin/manager-product/manager-product.component';
import { AddProductComponent } from './component/pages/admin/add-product/add-product.component';
import { UpdateProductComponent } from './component/pages/admin/update-product/update-product.component';
import { AdminLayoutComponent } from './component/layout/admin-layout/admin-layout.component';
import { SigninComponent } from './component/auth/signin/signin.component';
import { SignupComponent } from './component/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomapageComponent,
    DashboardComponent,
    ManagerProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    AdminLayoutComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
