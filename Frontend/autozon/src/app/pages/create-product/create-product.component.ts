import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatCardImage } from '@angular/material/card';
import { ICar } from 'src/app/core/models/car.model';
import { ICarModel } from 'src/app/core/models/carmodel.model';
import { IProduct } from 'src/app/core/models/product.model';
import { CarService } from 'src/app/core/services/car/car.service';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  newProduct = new FormGroup({
    nameCtrl: new FormControl(''),
    manufacturerCtrl: new FormControl(''),
    priceCtrl: new FormControl(''),
    legalityCtrl: new FormControl(''),
    shortDescCtrl: new FormControl(''),
    descCtrl: new FormControl(''),
    categoryCtrl: new FormControl(''),
    serialCtrl: new FormControl(''),
  });
  Cars: ICar[] = [];

  carId = undefined;
  constructor(private productService: ProductService, private carService: CarService ) { 
    
  }

  ngOnInit(): void {
    this.carService.fetchCars().subscribe(res => {
      this.Cars = res;
    })

  }

  createProduct(){

    let productData: IProduct = {
      name: this.newProduct.get('nameCtrl')?.value,
      manufacturer: this.newProduct.get('manufacturerCtrl')?.value,
      price: this.newProduct.get('priceCtrl')?.value,
      streetLegality: this.newProduct.get('legalityCtrl')?.value,
      shortDescription: this.newProduct.get('shortDescCtrl')?.value,
      description: this.newProduct.get('descCtrl')?.value,
      category: this.newProduct.get('categoryCtrl')?.value,
      serialNumber: this.newProduct.get('serialCtrl')?.value,
      preview: 'prev1',
      preview2: 'prev2',
      preview3: 'prev3',
      car: this.carId,
      // TODO: Add Dealer's token
    }


    this.productService.createNewProduct(productData).subscribe((result: any) => {
      console.log(result);
    })
  }

}
