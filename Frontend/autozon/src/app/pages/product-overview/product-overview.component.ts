import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss'],
})
export class ProductOverviewComponent implements OnInit {
  products: IProduct[] = [];
  car = {};

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.fetchProductData().subscribe((res) => {
      if (res !== undefined) {
        this.products = res;
        var searchParams = new URLSearchParams(window.location.search);
        var brand = searchParams.get('brand');
        var model = searchParams.get('model');
        var temp = this.products;
        if (brand !== null && model !== null) {
          this.products = [];

          temp.forEach((element) => {
            if (
              element.car?.carBrand === brand &&
              element.car?.carModel.carModel === model
            ) {
              this.products.push(element);
            }
          });
        }
      }
    });
  }
}
