import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { ProductOverviewComponent } from './pages/product-overview/product-overview.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { MyProductOverviewComponent } from './pages/my-product-overview/my-product-overview.component';


const routes: Routes = [
  { 
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: ProductOverviewComponent
      },
      {
        path: 'my-products',
        component: MyProductOverviewComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: '**',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
