import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: IProduct = {};
  showMore = false;
  route: string = window.location.pathname;

  constructor() {}

  ngOnInit(): void {}

  showDeleteButton(): boolean {
    if (this.route === '/my-products') {
      return true;
    }
    return false;
  }

}
