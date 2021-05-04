import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: IProduct = {};
  constructor() { }

  ngOnInit(): void {
  }

}
