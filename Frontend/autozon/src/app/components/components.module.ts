import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [
    // enter component declaration to use in page or wherever else
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductCardComponent
  ]
})
export class ComponentsModule { }
