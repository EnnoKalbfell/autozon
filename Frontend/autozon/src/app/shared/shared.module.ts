import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../core/material/material.module';


@NgModule({
  declarations: [],
  exports: [
    MaterialModule, 
    CoreModule
  ]
})
export class SharedModule { }
