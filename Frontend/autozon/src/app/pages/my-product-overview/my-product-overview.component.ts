import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';
import { LoginService } from 'src/app/core/services/login/login.service';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-my-product-overview',
  templateUrl: './my-product-overview.component.html',
  styleUrls: ['./my-product-overview.component.scss']
})
export class MyProductOverviewComponent implements OnInit {
  products: IProduct[] = [];
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

  constructor(private productService: ProductService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.productService.fetchMyProductData().subscribe(res => {
      if (res !== undefined){
        this.products = res;
      }
    });

    this.loginService.getUser().subscribe(res => {
      if (res !== undefined) {
        this.user = res;
      }
    });
  }
}
