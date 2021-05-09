import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { ProductOverviewComponent } from './pages/product-overview/product-overview.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ProductSearchComponent } from './pages/product-search/product-search.component';


const routes: Routes = [
  { 
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: ProductOverviewComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
