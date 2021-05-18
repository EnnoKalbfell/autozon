import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationUserComponent } from './navigation-user/navigation-user.component';

@NgModule({
  declarations: [
    // enter component declaration to use in page or wherever else
    ProductCardComponent,
    DeleteConfirmationDialogComponent,
    NavigationComponent,
    NavigationUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductCardComponent,
    DeleteConfirmationDialogComponent,
    NavigationComponent,
    NavigationUserComponent
  ]
})
export class ComponentsModule { }
