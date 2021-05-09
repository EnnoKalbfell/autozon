import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: IProduct = {};
  showMore = false;
  route: string = window.location.pathname;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  showDeleteButton(): boolean {
    if (this.route === '/my-products') {
      return true;
    }
    return false;
  }

  deleteProduct(): void {
    // TODO: Add dialog to confirm deleting before actually deleting product
    if (this.product.id) {
      this.productService.deleteMyProduct(this.product.id).subscribe((res: JSON) => {
        if (res !== undefined) {
          // Reload to not show deleted product anymore
          window.location.reload();
        }
      });
    }
  }
}
