import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';
import { ProductSearchService } from 'src/app/core/services/product-serarch/product-search.service';


@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  products: IProduct[] = [];
  car = {};

  constructor(private productService: ProductService, private productSearchService: ProductSearchService) {
  }

  ngOnInit(): void {
    this.productService.fetchProductData().subscribe(res =>{
      if(res !== undefined){
        this.products = res;
      }
    })

    this.car = this.productSearchService.getBrandAndModel();
    console.log(this.car);
        
  }

}
