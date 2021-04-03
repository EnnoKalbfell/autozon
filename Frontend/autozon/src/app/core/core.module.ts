import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  exports: [
    MaterialModule,
    CommonModule,
    RouterModule,
  ]
})
export class CoreModule { }
