import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-my-product-overview',
  templateUrl: './my-product-overview.component.html',
  styleUrls: ['./my-product-overview.component.scss']
})
export class MyProductOverviewComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.fetchMyProductData().subscribe(res => {
      if (res !== undefined){
        this.products = res;
      }
    });
  }

}
