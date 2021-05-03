import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { ProductOverviewComponent } from './pages/product-overview/product-overview.component';

const routes: Routes = [
  { path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '',
        component: ProductOverviewComponent
      }
    ]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
