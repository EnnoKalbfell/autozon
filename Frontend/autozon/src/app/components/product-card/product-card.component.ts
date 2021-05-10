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
  showMore: boolean = false;
  route: string = window.location.pathname;
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

  constructor(
    private ProductIdService: ProductIdService,
    private productService: ProductService,
    private loginService: LoginService,
    public dialog: MatDialog
  ) {
    this.product = {}
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
   * Show delete button if authenticated user is dealer and on my-product page
   */
  showDeleteButton(): boolean {
    if (this.user.role == 'dealer' && this.route === '/my-products') {
      return true;
    }
    return false;
  }
  
  /**
   * Open details of product
   */
  clickDetails() {
    const id = this.product.id;
    if(id){
      this.ProductIdService.setId(id); 
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
    if (this.product.id && this.user.role === "dealer") {
      this.productService.deleteMyProduct(this.product.id).subscribe((res: JSON) => {
        if (res !== undefined) {
          // Reload to not show deleted product anymore
          window.location.reload(); // TODO: Maybe solve reloading nicer
        }
      });
    }
  }
}
