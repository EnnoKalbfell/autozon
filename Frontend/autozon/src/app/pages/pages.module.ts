import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';




@NgModule({
  declarations: [
    // enter page declaration
    ProductOverviewComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ]
})
export class PagesModule { }
