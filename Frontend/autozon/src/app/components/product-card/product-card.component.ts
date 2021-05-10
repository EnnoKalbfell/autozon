import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';
import { ProductIdService } from 'src/app/core/services/product/product.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: IProduct;
  showMore: boolean = false;
  route: string = window.location.pathname;

  constructor(
    private ProductIdService: ProductIdService,
    private productService: ProductService,
    public dialog: MatDialog
  ) {
    this.product = {}
  }

  ngOnInit(): void {}

  showDeleteButton(): boolean {
    if (this.route === '/my-products') {
      return true;
    }
    return false;
  }

  clickDetails() {
    const id = this.product.id;
    if(id){
      this.ProductIdService.setId(id); 
    } 
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
}
