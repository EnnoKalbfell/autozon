import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';
import { ProductIdService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: IProduct;
  showMore: boolean = false;

  constructor(private ProductIdService: ProductIdService) {
    this.product = {}
  }

  ngOnInit(): void {
    
  }

  clickDetails() {
    const id = this.product.id;
    if(id){
      this.ProductIdService.setId(id); 
    } 
  }

}
