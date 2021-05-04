import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../core/material/material.module';


@NgModule({
  declarations: [],
  exports: [
    MaterialModule, 
    FlexLayoutModule,
    CoreModule
  ]
})
export class SharedModule { }
