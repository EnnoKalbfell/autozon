import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  products: IProduct[] = [];
  product: IProduct = {};



  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.productService.fetchProductData().subscribe(res =>{
    //   if(res !== undefined){
    //     this.products = res;
    //   }
    // })
  }

}
