import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  products: number[];
  constructor() {
    this.products = [
      1, 2, 3, 4, 5
    ];
  }

  ngOnInit(): void {
  }

}
