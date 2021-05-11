import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';
import { LoginService } from 'src/app/core/services/login/login.service';
import { IUser } from 'src/app/core/models/user.model';
import { ICartModel } from 'src/app/core/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: ICartModel[] = [];
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
  };

  constructor(
    private productService: ProductService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.products = JSON.parse(sessionStorage.getItem('cart') || '[]') as ICartModel[];

    this.loginService.getUser().subscribe(res => {
      if (res !== undefined) {
        this.user = res;
      }
    });

    this.getProductsOfCartContent();
  }

  /**
   * Fetch sessionStorage's products from DB
   */
  getProductsOfCartContent(): void {
    this.products.forEach((p: ICartModel) => {
      this.productService.fetchDetailProductData(p.id).subscribe(res => {
        if (res !== undefined) {
          p.name = res.name;
          p.dealer = res.dealer;
          p.description = res.description;
          p.manufacturer = res.manufacturer;
          p.price = res.price;
          p.serialNumber = res.serialNumber;
          p.shortDescription = res.shortDescription;
          p.streetLegality = res.streetLegality;
          p.category = res.category;
          p.carId = res.carId;
          p.car = res.car;
          p.preview = res.preview;
          p.preview2 = res.preview2;
          p.preview3 = res.preview3;
        }
      });
    });
  }

  /**
   * Order all products from cart
   */
  order(): void {
    let productIds: number[] = [];
    // Build request param
    this.products.forEach((p: ICartModel) => {
      // Add productId once per amount
      for (let i = 0; i < p.amount; i++) {
        productIds.push(p.id);        
      }
    });

    // Place request
    this.productService.placeOrder(productIds).subscribe(res => {
      if (res !== undefined) {
        // Remove all products from sessionStorage
        sessionStorage.removeItem('cart');
        window.location.reload();
      }
    });    
  }

}
