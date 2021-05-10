import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { ICartModel } from 'src/app/core/models/cart.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: IProduct = {};
  showMore = false;
  route: string = window.location.pathname;

  constructor(private productService: ProductService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  showDeleteButton(): boolean {
    if (this.route === '/my-products') {
      return true;
    }
    return false;
  }

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

  deleteProduct(): void {
    if (this.product.id) {
      this.productService.deleteMyProduct(this.product.id).subscribe((res: JSON) => {
        if (res !== undefined) {
          // Reload to not show deleted product anymore
          window.location.reload(); // TODO: Maybe solve reloading nicer
        }
      });
    }
  }

  /**
   * Add product to cart array in session storage
   */
  addToCart(): void {
    // TODO: Test if logged in user is of role "customer"
    if (this.product.id) {
      const cartContent: string = sessionStorage.getItem('cart') || '[]';
      var cartArray: ICartModel[] = JSON.parse(cartContent);
      var found: boolean = false;

      cartArray.forEach((entry: ICartModel) => {
        // Increase amount if product is already in cart
        if (entry.id === this.product.id) {
          entry.amount+= 1;
          found = true;
        }
      });

      // Add new entry in cart array
      if (!found) {
        cartArray.push({
          id: this.product.id,
          amount: 1
        });
      }

      // Save to sessions storage
      sessionStorage.setItem('cart', JSON.stringify(cartArray));
    }
  }

}
