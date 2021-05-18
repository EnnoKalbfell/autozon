import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCardImage } from '@angular/material/card';
import { Router } from '@angular/router';
import { ICar } from 'src/app/core/models/car.model';
import { ICarModel } from 'src/app/core/models/carmodel.model';
import { IProduct } from 'src/app/core/models/product.model';
import { IUser } from 'src/app/core/models/user.model';
import { CarService } from 'src/app/core/services/car/car.service';
import { LoginService } from 'src/app/core/services/login/login.service';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  newProduct: FormGroup | any;

  submitted = false;
  user: IUser = {
    id: 0,
    lastName: '',
    firstName: '',
    companyName: '',
    email: '',
    phone: '',
    streetAndHouseNumber: '',
    zipCode: '',
    city: '',
    country: '',
    role: '',
    verified: false
  }
  Cars: ICar[] = [];

  carId = undefined;
  constructor(private productService: ProductService, private carService: CarService, private loginService: LoginService, private router: Router, private formBuilder: FormBuilder ) { 
  }

  ngOnInit(): void {

    this.carService.fetchCars().subscribe(res => {
      this.Cars = res;
    });

    this.loginService.getUser().subscribe(res => {
      if (res) {
        this.user = res;
      }
    });

    this.newProduct = this.formBuilder.group({
      dealerCtrl: [this.user.id, [Validators.required]],
      nameCtrl: ['', [Validators.required]],
      manufacturerCtrl: ['', [Validators.required]],
      priceCtrl: ['', [Validators.required]],
      legalityCtrl: [''],
      shortDescCtrl: ['', [Validators.required, Validators.maxLength(200)]],
      descCtrl: ['', [Validators.required, Validators.maxLength(500)]],
      categoryCtrl: ['', [Validators.required]],
      serialCtrl: ['', [Validators.required]],
    })

  }

  get f(): any {
    return this.newProduct.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.newProduct.invalid) {
      return;
    }

    this.createProduct();
  }

  createProduct(){

    let productData: IProduct = {
      name: this.newProduct.get('nameCtrl')?.value,
      dealer: this.user,
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
      try {
        this.router.navigate(['/my-products'])
      } catch (error) {
        
      }
    });
  }
}
