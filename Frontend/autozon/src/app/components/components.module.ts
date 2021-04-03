import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    // enter component declaration to use in page or wherever else
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
  ]
})
export class ComponentsModule { }
