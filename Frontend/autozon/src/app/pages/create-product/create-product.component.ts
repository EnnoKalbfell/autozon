import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductService ) { }

  ngOnInit(): void {
  }

  createProduct(){

    let productData: IProduct = {
      name: 'timeattack bodykit',
      manufacturer: 'varis',
      price: 20,
      streetLegality: true,
      shortDescription: 'beautiful time attack bodykit.',
      description: 'The legendary time attack bodykit',
      category: 'body',
      serialNumber: 'a1d2h764j223',
      preview: 'prev1',
      preview2: 'prev2',
      preview3: 'prev3',
      car: [
        {
          id: 11,
          carBrand: 'mitsubishi',
          carModelId: 1,
          carModel: [
            {
              id: 2,
              carModel: 'lancer EVO X',
              carModelYear: 2010,
              fuel: 'gasoline',
              engineNumber: 'GEMA',
              vinNumber: '11h12j342bj234gzzj234h8',
            }
          ]
        }
      ]
    }
    this.productService.createNewProduct(productData).subscribe(res => {
      console.log(res);
    })
  }

}
