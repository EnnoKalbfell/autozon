import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MyProductOverviewComponent } from './my-product-overview/my-product-overview.component';
import { CartComponent } from './cart/cart.component';
import { CreateProductComponent } from './create-product/create-product.component';

@NgModule({
  declarations: [
    // enter page declaration
    ProductOverviewComponent,
    MyProductOverviewComponent,
    LoginComponent,
    RegistrationComponent,
    ProductDetailComponent,
    CartComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
