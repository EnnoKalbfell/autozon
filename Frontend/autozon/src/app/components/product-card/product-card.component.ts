import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';
import { ProductIdService } from 'src/app/core/services/product/product.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { ICartModel } from 'src/app/core/models/cart.model';
import { LoginService } from 'src/app/core/services/login/login.service';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProduct;
  @Input() amount: number;
  @Input() allProducts: ICartModel[];
  user: IUser = {
    id: 0,
    lastName: '',
    firstName: '',
    companyName: '',
    email: '',
    phone: '',
    streetAndHouseNumber: '',
    zipCode: '',
    city: '',
    country: '',
    role: '',
    verified: false
  };
  showMore = false;
  route: string = window.location.pathname;

  constructor(
    private productIdService: ProductIdService,
    private productService: ProductService,
    private loginService: LoginService,
    public dialog: MatDialog
  ) {
    this.product = {};
    this.amount = 0;
    this.allProducts = [];
  }

  ngOnInit(): void {
    // Get currently authenticated user
    this.loginService.getUser().subscribe(res => {
      if (res !== undefined) {
        this.user = res;
      }
    });
  }

  /**
   * Open details of product
   */
  clickDetails(): void {
    const id = this.product.id;
    if (id) {
      this.productIdService.setId(id);
    }
  }

  /**
   * Open the deletation confirmation
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: 'auto',
      data: this.product.name || ''
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteProduct();
      }
    });
  }

  /**
   * Delete this product
   */
  deleteProduct(): void {
    if (this.product.id && this.user !== undefined && this.user.role === 'dealer') {
      this.productService.deleteMyProduct(this.product.id).subscribe((res: any) => {
        if (res !== undefined) {
          // Reload to not show deleted product anymore
          window.location.reload(); // TODO: Maybe solve reloading nicer
        }
      });
    }
  }

  /**
   * Remove a product from cart
   */
  removeProduct(): void {
    this.allProducts.forEach((p: ICartModel, i: number) => {
      if (p.id === this.product.id) {
        if (p.amount > 1) {
          // Decrease amount by one
          p.amount--;
        } else {
          // Remove whole product if 0 are in cart
          this.allProducts.splice(i, 1);
        }
        sessionStorage.setItem('cart', JSON.stringify(this.allProducts));
        return;
      }
    });
  }
}
