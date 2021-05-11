import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { ProductOverviewComponent } from './pages/product-overview/product-overview.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ProductSearchComponent } from './pages/product-search/product-search.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { MyProductOverviewComponent } from './pages/my-product-overview/my-product-overview.component';
import { CartComponent } from './pages/cart/cart.component';


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
        path: 'details',
        component: ProductDetailComponent
      },
      {
        path: 'my-products',
        component: MyProductOverviewComponent
      },
      {
        path: 'cart',
        component: CartComponent
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
    path: 'search',
    component: ProductSearchComponent
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
