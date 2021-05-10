import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';
import { ProductIdService, ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct = {};
  constructor(private productIdService: ProductIdService, private productService: ProductService) { 
  }

  ngOnInit(): void {
    const id = this.productIdService.getId();

    this.productService.fetchDetailProductData(id).subscribe(res => {
      if(res !== undefined){
        this.product = res;
      }
    })
  }

}
